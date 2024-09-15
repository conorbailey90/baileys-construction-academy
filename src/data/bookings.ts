import { sql } from "@vercel/postgres"

export const getTotalBookingsPerWeek = async () => {
    
    try{
        const {rows} = await sql`SELECT course_id, date, COUNT(*) FROM bookings WHERE date > NOW() GROUP BY course_id, date;`;
        return rows;
    }catch{
        return null
    }
}


export const getUserBookings = async (useriD: string | undefined) => {
    
    try{
        const {rows} = await sql`SELECT a.name, a.email, c.name as course, b.date as course_date
                                    FROM users a
                                    INNER JOIN bookings b
                                    ON a.id = b.customer_id
                                    INNER JOIN courses c
                                    ON c.id = b.course_id
                                    WHERE a.id = ${useriD}`;
        return rows;
    }catch{
        return null
    }
}