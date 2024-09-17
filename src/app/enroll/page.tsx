
import { auth } from "@/auth"
import BookingCalendar from "@/components/BookingCalendar"
import { sql } from "@vercel/postgres";
import { getTotalBookingsPerWeek } from "@/data/bookings";

const BookingPage = async () => {
    const session = await auth();
    const {rows} = await sql`SELECT * FROM courses;`
    const bookingTotals = await getTotalBookingsPerWeek()

    return (
        <section className="w-[100%] flex justify-center bg-[#161616] pb-[30px]">
            <div className="w-[95%]">
                <BookingCalendar user={session?.user} courses={rows} bookingTotals={bookingTotals} />
            </div>
        </section>

    )
}

export default BookingPage