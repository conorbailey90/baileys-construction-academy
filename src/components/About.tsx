import Image from 'next/image'
import React from 'react'
import { Check } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  return (
    <section id='about' className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

        <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>

            <div className=' relative p-[1rem] col-start-3 col-span-8 border border-[rgb(252,186,3)] border-[1px] aspect-square md:col-span-4 md:col-start-2 '>
                <div className='absolute inset-[1rem]  '>
                <Image 
                    style={{objectFit: "cover"}}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/plasterer.jpg"
                    alt="Background Image"
                    fill // Can be 'contain', 'cover', or 'none' based on your needs
                    quality={100} // Optional: Specify the quality of the image/
                 />
                </div>
                
            </div>
            <div className=' pb-[2rem] col-start-1 col-span-12 md:col-start-7 md:col-span-6 row-start-1'>
                <h4 className='font-bold'>About Us</h4><br />
                <p className='text-balance'>Welcome to the Bricklaying and Plastering Academy, where we&apos;re dedicated to shaping the next generation of construction professionals. Based in Essex, our academy is a hub of excellence for anyone looking to master the skills of bricklaying and plastering.</p><br />
                <p className='text-balance'>Our mission is simple: to provide top-notch training that combines hands-on experience with industry-leading knowledge. We believe that great craftsmanship starts with a solid education, and we&apos;re here to offer you both.</p><br />
                <h5 className='font-bold'>What We Offer:</h5>
                <ul><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Expert Instruction:</span> Learn from seasoned professionals who bring years of real-world experience to the classroom.</p></li><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Hands-On Training:</span> Our courses are designed to give you practical skills that you can apply immediately on the job.</p></li><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Comprehensive Programs:</span> From beginner courses to advanced techniques, we cater to all levels of expertise.</p></li><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>State-of-the-Art Facilities:</span> Train in a modern environment equipped with the latest tools and technology.</p></li><br />
                </ul>
                <Link href={'/about'}>
                    <h6 className='bg-[rgb(252,186,3)] rounded-[5px] text-center cursor-pointer font-bold text-[#161616] p-[1rem] hover:opacity-[0.5]'>Learn More</h6>
                </Link>
           
            </div>
              
        </div>
</section>
  )
}

export default About