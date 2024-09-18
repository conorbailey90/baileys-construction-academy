'use server';
import { sql } from "@vercel/postgres";

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

  try{
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

    // Updare user details from Enroll form and add new booking to database.
    let [updateDetails, newBooking] = await Promise.all([
      sql`UPDATE users 
      SET first_name = ${firstname}, 
      last_name = ${lastname}, 
      address_line1 = ${address1}, 
      address_line2 = ${address2},
      city = ${city},
      county = ${county},
      country = ${country},
      postcode = ${postcode},
      phone_number = ${phone}
      WHERE id = ${customerId};`,
      sql`INSERT INTO bookings (customer_id, course_id, date) VALUES (${customerId}, ${courseId}, ${formattedDate});`,
    ])

  }catch(err){
    console.log(err)
    return {success: false}
  }
  return { success: true };
}

export const deleteUserBooking = async (bookingId: string | undefined) => {
    
  try{
      const {rows} = await sql`DELETE FROM bookings WHERE id = ${bookingId};`
      return { success: true, message: 'Booking deleted' };
  }catch(err){
    return {success: false, message: err}
  }
}


export const getBookings = async () => {
  try{

    const {rows} = await sql`SELECT b.name, b.first_name, b.last_name, b.email, c.name as course, a.date 
                              FROM bookings a
                              INNER JOIN users b 
                              ON a.customer_id = b.id
                              INNER JOIN courses c 
                              ON a.course_id = c.id
                              WHERE a.date >= now();`
      return rows;
  }catch(err){
    return {success: false, message: err}
  }
}