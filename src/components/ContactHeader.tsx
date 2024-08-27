import React from 'react'
import { PhoneIcon, MailIcon, MapPin } from 'lucide-react'

const ContactHeader = () => {
  return (
    <div className='fixed hidden md:flex justify-center z-10 h-[40px] w-[100%] top-0 left-0 bg-[rgb(252,186,3)]'>
        <div className='relative w-[95%] max-w-[1880px] flex '>
          <div className=' flex items-center h-[100%] mr-[2rem]'>
            <PhoneIcon color='black' strokeWidth={'1px'} className='mr-[.5rem]' />
            <p className='text-[#161616] font-semibold'> 01277 532991</p>
          </div>
          <div className=' flex items-center h-[100%] mr-[2rem]'>
            <MailIcon strokeWidth={'1px'}color='black' className='mr-[.5rem]' />
            <p className='text-[#161616] font-semibold'>info@paulbailey.info</p>
          </div>
          <div className=' flex items-center h-[100%] mr-[2rem]'>
            <MapPin strokeWidth={'1px'}color='black' className='mr-[.5rem]' />
            <p className='text-[#161616] font-semibold'>Unit 16 Ilford Trading Estate, Paycocke Road, Basildon, Essex,  SS14 3DR</p>
          </div>
        </div>
    </div>
  )
}

export default ContactHeader