import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
// Run the following in postgres to allow for UUID
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
export async function GET(request: Request) {
  try {
    const result = await sql`
                              CREATE TABLE IF NOT EXISTS courses ( 
                                  id INTEGER PRIMARY KEY,
                                  name VARCHAR(255) NOT NULL,
                                  capacity INTEGER NOT NULL
                              );`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}