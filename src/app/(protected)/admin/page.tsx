import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
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
import { getBookings } from '@/actions/bookings'
import Link from 'next/link'

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
  

const AdminPage = async () => {

    const session = await auth()
    if (!session) {
        // Handle the case where session or session.user is null or undefined
        redirect('/login')
    }

    if (session.user.role != 'ADMIN') {
        // Handle the case where session or session.user is null or undefined
        redirect('/profile')
    }

    const bookings = await getBookings();
    
  return (
    <div className='pt-[160px]'>
           <h5 className="mb-[1rem]">Your bookings:</h5>
        {bookings && Array.isArray(bookings) ? 
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
            let date = new Date(b.date);
            console.log(bookings)
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
           <p>There are no course bookings.</p>
        </div>
       
        }
    </div>
  )
}

export default AdminPage