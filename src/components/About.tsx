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
                <p className='text-balance'>Welcome to Bricklaying and Plastering Courses - Essex, where we&apos;re focused on helping you gain practical skills in bricklaying and plastering. Whether you&apos;re looking to pursue a career in these trades or simply want to learn for your own DIY projects, our school offers hands-on training for all levels.</p><br />
                <p className='text-balance'>Our mission is to provide quality training that combines practical experience with essential knowledge. We believe that learning by doing is the best way to master these skills, and we&apos;re here to support you every step of the way.</p><br />
                <h5 className='font-bold'>What We Offer:</h5>
                <ul><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Expert Instruction:</span> Learn from knowledgeable professionals who have years of experience in bricklaying and plastering. They&apos;re here to guide you and share their expertise.</p></li><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Practical Hands-On Training:</span> Our 5-day courses are designed to give you real-world experience, whether you&apos;re just starting out or looking to sharpen your skills. You&apos;ll have the chance to work with the tools and materials used in the industry.</p></li><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Programs for All Skill Levels:</span> From beginners to those with more experience, we offer courses that cater to a variety of skill levels and learning goals.</p></li><br />
                    <li className='flex items-center'><Check width={'30px'} color='rgb(252,186,3)' className='mr-[1rem]' /><p> <span className='font-semibold'>Supportive Learning Environment: </span> Our facilities are equipped to provide a practical training experience, focusing on giving you the confidence and skills to apply what you learn, whether on a job site or at home.</p></li><br />
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