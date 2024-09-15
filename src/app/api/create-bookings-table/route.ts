import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
// Run the following in postgres to allow for UUID
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
export async function GET(request: Request) {
  try {
    const result = await sql`
                              CREATE TABLE IF NOT EXISTS bookings ( 
                                  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                                  customer_id UUID NOT NULL,
                                  course_id INTEGER NOT NULL,
                                  date DATE NOT NULL
                              );`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}