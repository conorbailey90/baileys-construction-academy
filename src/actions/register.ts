'use server'
import bcrypt from 'bcryptjs';
import { sql } from '@vercel/postgres';
import { getUserByEmail } from '@/data/user';
import { prisma } from '@/lib/prisma';

import * as z from 'zod'

import { RegisterSchema } from '@/schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {

    const validatedFields = RegisterSchema.safeParse(values);
    console.log(values)
    if(!validatedFields.success){
        return {error: 'Invalid fields!'}
    }

    const {name , email, password} = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error: 'Email already in use!'}
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
 
    return {success: 'User created!'}
}