import { book } from "@/actions/bookings"
import { auth } from "@/auth"
import { getUserBookings } from "@/data/bookings"
import { redirect } from "next/navigation"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

function addZero(number: number){
  return number < 10 ? `0${number}` : number
}


const ProfilePage = async () => {
    const session = await auth()
    console.log(session?.user)
    if (!session || !session.user) {
        // Handle the case where session or session.user is null or undefined
        redirect('/login')
    }
    const bookings = await getUserBookings(session.user.id)
  
  return (
    <div className="w-[100%] min-h-[100vh] flex justify-center pt-[120px]">
      <div className="w-[95%]">

        <h2 className="mb-[1rem]">Welcome {session.user.name}</h2>
  
        <h3 className="mb-[1rem]">Your bookings:</h3>
        {bookings && bookings.length > 0 ? 
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Course</TableHead>
            <TableHead className="text-right">Course Date (Week Commencing)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((b, idx) => {
            let date = new Date(b.course_date);
            return(
              <TableRow key={idx}>
              <TableCell className="font-medium">{b.name}</TableCell>
              <TableCell>{b.email}</TableCell>
              <TableCell>{b.course}</TableCell>
              <TableCell className="text-right">{`${addZero(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()}`}</TableCell>
            </TableRow>
            )
           
        })}
        </TableBody>
      </Table>
      :
        <div>
           <h4>You do not have currently have any course bookings.</h4>
           <Button className="my-[1rem] font-bold bg-[rgb(255,186,3)] hover:bg-[rgb(255,186,3)] hover:opacity-[.5]"><Link href={'/enroll'}>Enroll Now</Link></Button>
        </div>
       
        }
        
      </div>
    </div>
  )
}

export default ProfilePage