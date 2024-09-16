'use server';
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function book(
  customerId: string, 
  courseId: number, 
  selectedDate: Date | undefined,
  firstname: string,
  lastname: string,
  address1: string,
  address2: string,
  city: string,
  county: string,
  country: string,
  postcode: string,
  phone: string
) {
  // Handle date on server side (store in database, etc.)
  // console.log('Received Date on Server:',course, selectedDate);

  const formattedDate = selectedDate?.toISOString();

  // Check if course is already at max capacity

  const [capacityResults, numOfBookingsResults, userAlreadyBooked] = await Promise.all([
    sql`SELECT capacity FROM courses WHERE id = ${courseId}`,
    sql`SELECT COUNT(*) FROM bookings WHERE course_id = ${courseId} AND date = ${formattedDate}`,
    sql`SELECT COUNT(*) FROM bookings WHERE course_id = ${courseId} AND date = ${formattedDate} AND customer_id = ${customerId}`,
  ]);

  if(userAlreadyBooked.rows[0].count > 0){
    return { error: true, message: 'User already booked on this date.' };
  }
  
  const capacity = capacityResults.rows[0].capacity;
  const numOfBookings = numOfBookingsResults.rows[0].count;
  
  if(numOfBookings >= capacity){
    return { error: true, message: 'Fully booked' };
  }
  let updatedDetails = await sql`UPDATE users 
                                  SET first_name = ${firstname}, 
                                  last_name = ${lastname}, 
                                  address_line1 = ${address1}, 
                                  address_line2 = ${address2},
                                  city = ${city},
                                  county = ${county},
                                  country = ${country},
                                  postcode = ${postcode},
                                  phone_number = ${phone}
                                  WHERE id = ${customerId};`
  let newBooking = await sql`INSERT INTO bookings (customer_id, course_id, date) VALUES (${customerId}, ${courseId}, ${formattedDate})`;
  return { success: true };
}