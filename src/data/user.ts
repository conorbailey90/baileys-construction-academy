import { sql } from "@vercel/postgres"

export const getUserByEmail = async (email: string | null | undefined, provider: string | null | undefined) => {
    
    try{
        const {rows} = await sql`SELECT * FROM users WHERE email = ${email} AND provider = ${provider}`;
        return rows[0];
    }catch{
        return null
    }
}

export const getUserById = async (id: string | undefined) => {
    try{
        const {rows} = await sql`SELECT * FROM users WHERE id = ${id}`;
        return rows[0];
    }catch{
        return null
    }
}