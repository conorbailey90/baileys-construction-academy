import { error } from "console";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET(){
    const resend = new Resend(process.env.RESEND_API_KEY)
    try{
        const {data} = await resend.emails.send({
            from: 'conor@bitch.com',
            to: 'conbailey90@gmail.com',
            subject: 'mug',
            html: '<h1>Hello from next</h1>'
        })
        return NextResponse.json({'id': `${data.id}`})
    }catch(err){
        return NextResponse.json({error})
    }
}