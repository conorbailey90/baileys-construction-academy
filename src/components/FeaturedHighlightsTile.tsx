'use client'
import { motion } from "framer-motion"
import { CalendarClockIcon, Building, GraduationCap, PencilRulerIcon, BrickWall, Cuboid  } from 'lucide-react';

export const FeaturedHighlightsTile = ({idx, icon, title, description}: {idx: number, icon: any, title: String, description: String}) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            transition={{ ease: "easeIn", duration: .3, delay: .1 * idx }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{once: true}}
            className='col-span-12 p-[2rem] bg-[black] flex flex-col md:col-span-6 lg:col-span-4'
        >
            {icon == 'brick' && <BrickWall strokeWidth={'1px'} size={50} className='mb-[1rem]' />}
            {icon == 'graduation' && <GraduationCap strokeWidth={'1px'} size={50} className='mb-[1rem]' />}
            {icon == 'building' && <Building strokeWidth={'1px'} size={50} className='mb-[1rem]' />}
            {icon == 'pencil' && <PencilRulerIcon strokeWidth={'1px'} size={50} className='mb-[1rem]' />}
            {icon == 'calendar' && <CalendarClockIcon strokeWidth={'1px'} size={50} className='mb-[1rem]' />}
            {icon == 'job' && <Cuboid strokeWidth={'1px'} size={50} className='mb-[1rem]' />}
            <div className='mb-[1rem]'>
                <h6 className='text-[rgb(252,186,3)] font-bold'>{title}</h6>    
            </div>
            <div style={{background: 'linear-gradient(to right, transparent, rgb(252, 186, 3), transparent)'}} className='w-[100%] h-[1px] mb-[1rem]'></div>
            <div>
                <p className='text-balance'>{description}</p>
            </div>
            
            
        </motion.div>
    )
}