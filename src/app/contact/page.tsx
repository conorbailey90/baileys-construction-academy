import React from 'react'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <section id='about' className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

    <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
        <h2 className='font-bold col-span-12'>Get In Touch</h2>
       <ContactForm />
          
    </div>
</section>
  )
}

export default page