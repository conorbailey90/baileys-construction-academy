'use client'
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"


export const CoursesTile = ({idx, title, description, details, image, href}: {idx: number, title: string, description: string, details: string, image: string, href: string }) => {
    return (
        <motion.div   
            initial={{ opacity: 0, y: 10 }} 
            transition={{ ease: "easeIn", duration: .5 , delay: .3 * idx }} 
            viewport={{once: true}}
            whileInView={{ opacity: 1, y: 0 }} 
            className='relative col-span-12 p-[2rem] bg-[black] flex flex-col md:col-span-6 border border-[black] border-[1px]'
        >
            {image && <Image alt='image' style={{objectFit: 'cover', opacity: .3}} src={image} fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />}
            <div className='relative mb-[1rem] z-1'>
                <h5 className='text-[rgb(252,186,3)] font-bold'>{title}</h5>    
            </div>
            <div className='relative z-1'>
                <p className='font-semibold'>{description}</p>
            </div>
            <div className='relative z-1 mt-[1rem]'>
                <p className='text-balance'>{details}</p>
            </div>
            <Link href={href}>
                <button className='relative mt-[1rem] text-[rgb(252,186,3)] font-bold z-10'>Learn More</button>
            </Link>
        </motion.div>
    )
}
