"use client"

import { useState, useRef, useEffect } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from "sonner"
import { book } from '@/actions/bookings'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, isWeekend} from 'date-fns'
import { useRouter } from 'next/navigation';

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
  const [selectedDates, setSelectedDates] = useState<Date[] | undefined>([])
  const [course, setCourse] = useState<number>(0)
  const [unavailableDays, setUnavailableDays] = useState<Date[]>([])
  const router = useRouter();

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
    // console.log(clickedDate);
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
          console.log(selectedDates[0])
          if(confirm(`You have selected the 5 day ${courses.find(c => c.id == course)?.name} course starting on ${selectedDates[0].toLocaleDateString()}. Click OK to confirm your booking.`)){
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
            // router.push('/profile');
            window.location.href = '/profile';

          }
        
        } else {
          toast.error('Please select a course from the menu.', toastOptions)
        }
      } else {
        toast.error('Please sign in to book a course!', toastOptions)
      }
    } catch (err) {
      console.log(err)
      toast.error('An error occurred while booking. Please try again or give us a call.', toastOptions)
    }
  }

  const isDateBooked = (date: Date) => {
    return unavailableDays.some(booking => 
      new Date(booking).toDateString() === date.toDateString()
    )
  }

  useEffect(() => {
    toast.message('Now taking bookings from February 2025!', toastOptions)
  },[])

  return (
      <div className='w-[100%] pt-[90px] flex flex-col md:flex-row md:pt-[150px]'>
       
        <div className='flex flex-col items-center flex-1 w-[100%]'>

          <div className='w-[100%]'>
            <h4 className="font-semibold mb-[1rem]">Select Course</h4>
          </div>
          
          <Select onValueChange={handleCourseChange}>
            <SelectTrigger className="w-[100%] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)] ">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course: any) => (
                <SelectItem key={course.id} value={course.id.toString()} className='font-semibold'>{course.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className='w-[100%]'>
            <h4 className="font-semibold my-[1rem]">
              Select Week
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
              <Calendar
                className="w-[100%] flex justify-center rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]"
                mode="multiple"
                selected={selectedDates}
                numberOfMonths={2}
                onSelect={handleDateSelect}
                fromDate={new Date(Date.UTC(2025, 1, 1))}
                toDate={new Date(Date.UTC(new Date().getFullYear() + 1, 11, 31))}
                // fromDate={new Date(2025, 1, 1)}
                // toDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
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
                <input ref={firstname} required type="text" name="firstname" id="" placeholder='First Name' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.firstName || ''} />
                <input ref={lastname}  required type="text" name="lastname" id="" placeholder='Last Name' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.lastName || ''} />
                <input ref={address1} required type="text" name='address1' placeholder='Address Line 1' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.address1 || ''}/>
                <input ref={address2}  required type="text" name='address2' placeholder='Address Line 2' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.address2 || ''}/>
                <input ref={city}  required type="text" name='city' placeholder='City' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.city || ''}/>
                <input ref={county}  required type="text" name='county' placeholder='County' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.county || ''}/>
                <input ref={country}  required type="text" name='country' placeholder='Country' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.country || 'United Kingdom'} />
                <input ref={postcode}  required type="text" name='postcode' placeholder='Post Code' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.postcode || ''} />
                <input ref={phone}  required type="text" name='phone' placeholder='Phone Number' className='w-[100%] p-[.5rem] rounded-[5px] bg-[black] border-[1px] border-[rgb(252,186,3)]' defaultValue={user.phone || ''} />
      
              </div>
              }
           
              <Button type="submit" className="w-full bg-[rgb(252,186,3)] hover:bg-[rgb(252,186,3)] hover:opacity-[.5]">Submit Booking</Button>
            </form>
          </div>
        </div>
      
        <div className='flex flex-col flex-1 w-[100%] py-[2rem] md:px-[2rem] md:py-[0]'>
          <div className='w-[100%]'>
            <h5 className="font-semibold mt-[2rem] mb-[1rem] md:mt-[0]">
              Course Selected: <span className='text-[rgb(252,186,3)] '>{courses.find(c => c.id == course)?.name || 'None'}</span> 
            </h5>
          </div>
          
          <div className='w-[100%] mb-[2rem] '>
            <h6 className="font-semibold">Selected Weekdays (Monday to Friday):</h6>
            <ul className="list-disc mt-[1rem]">
            {selectedDates?.map((date, index) => (
              <li className='font-semibold list-none border-b border-white/20 py-[.5rem]' key={index}>{date.toDateString()}</li>
            ))}
            </ul>
          </div>
         
        </div>
      </div>
  )
}
