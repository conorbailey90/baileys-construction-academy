import React from 'react'
import ContactForm from '@/components/ContactForm'
import { PhoneIcon, MailIcon, MapPin } from 'lucide-react'

const page = () => {
  return (
    <section id='about' className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

    <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
        <h2 className='font-bold col-span-12'>Get In Touch</h2>
       <ContactForm />
       {/* details */}
       <div className='col-span-12 md:col-span-6 md:col-start-7 '>
          <ul>
            <li className='flex py-[1.5rem]'>
              <div className='flex-[3] flex justify-center items-center'>
                <MapPin size={'50px'} />
              </div>
              
              <div className='flex-[10]'>
                <p className='font-semibold text-lg'>Unit 15 Ilford Trading Estate</p>
                <p className='font-semibold text-lg'>Paycocke Road</p>
                <p className='font-semibold text-lg'>Basildon</p>
                <p className='font-semibold text-lg'>Essex</p>
                <p className='font-semibold text-lg'>SS14 3DR</p>
              </div>
            </li>
            <li className='flex py-[1.5rem]'>
              <div className='flex-[3] flex justify-center items-center'>
                <MailIcon size={'50px'}/>
              </div>
              <div className='flex-[10] flex items-center'>
                <p className='font-semibold text-lg'>info@paulbailey.info</p>
              </div>
            
            </li>
            <li className='flex py-[1.5rem]'>
              <div className='flex-[3] flex justify-center items-center'>
                <PhoneIcon size={'50px'}/>
              </div>
              <div className='flex-[10] flex items-center'>
                <p className='font-semibold text-lg'>01268 204334</p>
              </div>
             
            </li>
          </ul>
       </div>

       <iframe className='col-span-12 w-[100%] my-[2rem]' src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d72735.79730003282!2d0.4033778288918451!3d51.59174867198839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47d8c7214a5c172b%3A0xb00057c0cd5969bf!2sIlford%20Trading%20Estate%2C%20Paul%20Bailey%20Home%20Extension%20Unit%2016%2C%20Paycocke%20Rd%2C%20Basildon%20SS14%203DR!3m2!1d51.590069199999995!2d0.48579229999999995!5e0!3m2!1sen!2suk!4v1724996118746!5m2!1sen!2suk" width="600" height="450" style={{border: '1px solid rgb(252,186,3)'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
    </div>
</section>
  )
}

export default page