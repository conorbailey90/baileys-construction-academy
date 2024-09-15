import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
// Run the following in postgres to allow for UUID
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
export async function GET(request: Request) {
  try {
    const result = await sql`
                              
                              CREATE TABLE IF NOT EXISTS users ( 
                                  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                                  name VARCHAR(255), 
                                  first_name VARCHAR(100),
                                  last_name VARCHAR(100),
                                  email VARCHAR(255), 
                                  password VARCHAR(255),
                                  provider VARCHAR(255),
                                  email_Verified DATE,
                                  role VARCHAR(255),
                                  phone_number VARCHAR(15),
                                  address_line1 VARCHAR(255),
                                  address_line2 VARCHAR(255),
                                  city VARCHAR(100),
                                  county VARCHAR(100),
                                  postcode VARCHAR(10),
                                  country VARCHAR(50) DEFAULT 'United Kingdom',
                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                                  CONSTRAINT unique_email_provider UNIQUE (email, provider)
                              );`;

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}