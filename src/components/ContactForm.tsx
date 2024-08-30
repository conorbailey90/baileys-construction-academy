'use client'
import { sendEmail } from '@/app/actions/sendEmail'
import { useRef } from "react";
import { toast } from 'sonner'

export default function ContactForm() {

  const ref = useRef<HTMLFormElement>(null);

  async function clientAction(formData: FormData){
    const result = await sendEmail(formData);
    if(result?.error){
      toast.error('Something went wrong!', {

        classNames: {
          toast: 'bg-[rgb(252,186,3)] border-1 border-black',
          title: 'text-[black]',
          icon: '[&>svg]:fill-[black]'
          
        }})
    }else{
      toast.success('Email sent', {

        classNames: {
          toast: 'bg-[rgb(252,186,3)] border-1 border-black',
          title: 'text-[black]',
          icon: '[&>svg]:fill-[black]'
          
      }})
      ref.current?.reset();
    }
  }


  return (
    <form ref={ref} className='col-span-12 md:col-span-5' action={clientAction} >
      <input required type="text" name="name" placeholder='Enter Name' className='mb-[1rem] w-[100%] p-[.5rem] rounded-[5px] bg-[black] border border-[1px] border-[rgb(252,186,3)] text-[white]' />
      <input required type="email" name="email" placeholder='Enter E-Mail' className='mb-[1rem] w-[100%] p-[.5rem] rounded-[5px] bg-[black] border border-[1px] border-[rgb(252,186,3)] text-[white]' />
      <input required type="text" name="telephone" placeholder='Enter Phone Number' className='mb-[1rem] w-[100%] p-[.5rem] rounded-[5px] bg-[black] border border-[1px] border-[rgb(252,186,3)] text-[white]' />
      <textarea required name="message" id="message" placeholder='Enter Message' className='mb-[1rem] w-[100%] p-[.5rem] min-h-[150px] rounded-[5px] text-[black] bg-[black] border border-[1px] border-[rgb(252,186,3)] text-[white]' />
      <button type="submit" className='w-[100%] bg-[rgb(252,186,3)] p-[1rem] rounded-[5px] text-[#161616] font-semibold'>Send</button>
    </form>
  )
}
