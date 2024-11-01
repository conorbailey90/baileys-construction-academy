'use server'

// components/Page.js
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';


  export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('telephone') as string;
    const message = formData.get('message') as string;

  

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const {data, error} = await resend.emails.send({
            from: 'Bricklaying & Plastering Courses Essex <onboarding@resend.dev>',
            to: ['conbailey90@gmail.com', 'bvadherconsultancy@gmail.com', 'bhavin@paulbailey.info', 'info@paulbailey.info', 'bricklayingandplasteringessex@gmail.com'],
            subject: 'Bricklaying and Plastering Courses Essex - New Query',
            react: EmailTemplate({ name, email, phone, message }), // Ensure this returns a valid React element
        });
     
      if (error) {
        // Return a plain object with error information
        return { success: false, error: error.message };
      }

      // Return the data as a plain object
      return { success: true, data: data };
    } catch (error) {
      // Handle unexpected errors and return a plain object
      return { success: false, error: (error as Error).message };
    }

  }