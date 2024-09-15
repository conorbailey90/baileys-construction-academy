"use client"

import { useState, useRef } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from "sonner"
import { book } from '@/actions/bookings'
import { Button } from '@/components/ui/button'
import { add, format } from 'date-fns'
import { startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, isWeekend, isBefore } from 'date-fns'

const toastOptions = {
  classNames: {
      toast: 'bg-[rgb(252,186,3)] border-1 border-black',
      title: 'text-[black]',
      icon: '[&>svg]:fill-[black]'
    }
}

export default function BookingCalendar({
  user,
  courses,
  bookingTotals
}: {
  user: any
  courses: any[]
  bookingTotals: any[] | null
}) {
  console.log(user)
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([])
  const [course, setCourse] = useState<number>(0)
  const [unavailableDays, setUnavailableDays] = useState<Date[]>([])

  // Form references
  const firstname = useRef<HTMLInputElement | null>(null);
  const lastname = useRef<HTMLInputElement | null>(null);
  const address1 = useRef<HTMLInputElement | null>(null);
  const address2 = useRef<HTMLInputElement | null>(null);
  const city = useRef<HTMLInputElement | null>(null);
  const county = useRef<HTMLInputElement | null>(null);
  const country = useRef<HTMLInputElement | null>(null);
  const postcode = useRef<HTMLInputElement | null>(null);
  const phone = useRef<HTMLInputElement | null>(null);

  const handleDateSelect = (dates: Date[] | undefined) => {
    if (!course) {
      toast.error('Please select a course from the drop down menu', toastOptions)
      return
    }
  
    if (!dates || dates.length === 0) {
      setSelectedDates([])
      return
    }
  
    const clickedDate = dates[dates.length - 1] // Get the most recently clicked date
    console.log(clickedDate);
    if (isWeekend(clickedDate)) {
      toast.error('Please select a weekday!', toastOptions)
      return
    }
  
    const start = startOfWeek(clickedDate, { weekStartsOn: 1 }) // Start from Monday
    const end = endOfWeek(clickedDate, { weekStartsOn: 1 }) // End on Sunday
    const weekDays = eachDayOfInterval({ start, end }).filter(date => !isWeekend(date))
 
    const isUnavailable = weekDays.some(day =>
      unavailableDays.some(unavailableDate =>
        isSameDay(new Date(unavailableDate), day)
      )
    )
  
    if (isUnavailable) {
      toast.error('One or more days in this week are not available', toastOptions)
      return
    }
  
    // Check if the clicked date's week is already selected
    const isWeekSelected = weekDays.every(weekDay =>
      selectedDates?.some(selectedDate => isSameDay(selectedDate, weekDay))
    )
  
    if (isWeekSelected) {
      // If the week is already selected, clear all selections
      setSelectedDates([])
    } else {
      // Clear previous selection and select all weekdays of the clicked date's week
      setSelectedDates(weekDays)
    }
  }
  const handleCourseChange = (e: string) => {
    setCourse(+e);

    // Check for dates when the course in unavailable / full booked to mark on the calendar
    let fullyBooked = bookingTotals?.filter(c => c.course_id == +e && +c.count >= 5)
    let unavailableDays: any = [];
    fullyBooked?.forEach(monday => {
      let date = new Date(monday.date)
      for(let i = 0; i < 5; i++){
        let nextUnavailableDay = new Date(date);
        nextUnavailableDay.setDate(date.getDate() + i);
        unavailableDays.push(nextUnavailableDay);
      }
    })
    setUnavailableDays(unavailableDays);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (user) {
        if(selectedDates && selectedDates?.length < 1){
          toast.error(`Please select your dates for the course!`, toastOptions);
          return
        }
        if (courses.some((c: any) => c.id === course) && selectedDates) {
          const response = await book(
                                      user.id, 
                                      course, 
                                      selectedDates[0], 
                                      firstname.current!.value,
                                      lastname.current!.value,
                                      address1.current!.value,
                                      address2.current!.value,
                                      city.current!.value,
                                      county.current!.value,
                                      country.current!.value,
                                      postcode.current!.value,
                                      phone.current!.value

                                        )
          if(response.error){
            toast.error(response.message, toastOptions);
            return
          }
          toast.success('Booking successful!', toastOptions)
        } else {
          toast.error('Please select a course from the menu.', toastOptions)
        }
      } else {
        toast.error('Please sign in to book a course!', toastOptions)
      }
    } catch (err) {
      toast.error('An error occurred while booking. Please try again or give us a call.', toastOptions)
    }
  }

  const isDateBooked = (date: Date) => {
    return unavailableDays.some(booking => 
      new Date(booking).toDateString() === date.toDateString()
    )
  }

  return (
      <div className='w-[100%] pt-[120px] flex flex-col items-center md:flex-row'>
        <div className='flex flex-col items-center flex-1 w-[100%]'>
          <div className='w-[100%]'>
            <h3 className="font-semibold mb-[1rem]">Select Course</h3>
          </div>
          
          <Select onValueChange={handleCourseChange}>
            <SelectTrigger className="w-[100%] ">
              <SelectValue className='font-semibold' placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course: any) => (
                <SelectItem key={course.id} value={course.id.toString()} className='font-semibold'>{course.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className='w-[100%]'>
            <h5 className="font-semibold mt-[2rem] mb-[1rem]">
              Select Week
            </h5>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
              <Calendar
                className="rounded-md border w-[100%] flex justify-center"
                mode="multiple"
                selected={selectedDates}
                numberOfMonths={2}
                onSelect={handleDateSelect}
                fromDate={new Date()}
                toDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
                modifiers={{ booked: isDateBooked }}
                modifiersStyles={{
                  booked: { color: "white", backgroundColor: "red", cursor: "not-allowed", opacity: 0.5, userSelect: 'none'  },
                }}
                components={{
                  DayContent: ({ date }) => (
                    <div className="w-full h-full flex items-center justify-center">
                      {format(date, 'd')}
                      {isDateBooked(date) && (
                        <div className="w-1 h-1 bg-red-500 rounded-full absolute bottom-1" />
                      )}
                    </div>
                  )
                }}
              />
              {user && 
              <div className="space-y-4">
                <input ref={firstname} required type="text" name="firstname" id="" placeholder='First Name' className='w-[100%] p-[.5rem]' defaultValue={user.firstName || ''} />
                <input ref={lastname}  required type="text" name="lastname" id="" placeholder='Last Name' className='w-[100%] p-[.5rem]' defaultValue={user.lastName || ''} />
                <input ref={address1} required type="text" name='address1' placeholder='Address Line 1' className='w-[100%] p-[.5rem]' defaultValue={user.address1 || ''}/>
                <input ref={address2}  required type="text" name='address2' placeholder='Address Line 2' className='w-[100%] p-[.5rem]' defaultValue={user.address2 || ''}/>
                <input ref={city}  required type="text" name='city' placeholder='City' className='w-[100%] p-[.5rem]' defaultValue={user.city || ''}/>
                <input ref={county}  required type="text" name='county' placeholder='County' className='w-[100%] p-[.5rem]' defaultValue={user.county || ''}/>
                <input ref={country}  required type="text" name='country' placeholder='Country' className='w-[100%] p-[.5rem]' defaultValue={user.country || 'United Kingdom'} />
                <input ref={postcode}  required type="text" name='postcode' placeholder='Post Code' className='w-[100%] p-[.5rem]' defaultValue={user.postcode || ''} />
                <input ref={phone}  required type="text" name='phone' placeholder='Phone Number' className='w-[100%] p-[.5rem]' defaultValue={user.phone || ''} />
      
              </div>
              }
           
              <Button type="submit" className="w-full">Submit Booking</Button>
            </form>
          </div>
        </div>
      
        <div className='flex flex-col items-center flex-1 w-[100%]'>
          <div className='w-[80%]'>
            <h5 className="font-semibold mt-[2rem] mb-[1rem]">
              Course Selected: <span className='text-[rgb(252,186,3)] '>{courses.find(c => c.id == course)?.name || 'None'}</span> 
            </h5>
          </div>
          
          <div className='w-[80%] mb-[2rem]'>
            <h5 className="font-semibold">Selected Weekdays (Monday to Friday):</h5>
            <ul className="list-disc pl-5 mt-[1rem]">
            {selectedDates?.map((date, index) => (
              <li key={index}>{date.toDateString()}</li>
            ))}
            </ul>
          </div>
         
        </div>
      </div>
  )
}
