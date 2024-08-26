import React from 'react'
import { CalendarClockIcon, Building, GraduationCap, PencilRulerIcon, BrickWall, Cuboid  } from 'lucide-react';

const featureHighlights = [ 
    {   icon: 'brick',
        title: "Hands-On Learning Experience", 
        description: "We believe in learning by doing. Our courses provide extensive hands-on training with real-world projects, ensuring you gain practical skills and experience. Work directly with tools and materials to master bricklaying and plastering techniques." 
    }, 
    { 
        icon: 'pencil',
        title: "Experienced Instructors", 
        description: "Learn from the best in the industry. Our instructors are seasoned professionals with years of experience in bricklaying and plastering. They bring practical knowledge, insights, and tips to help you excel in your career." 
    }, 
    { 
        icon: 'building',
        title: "State-of-the-Art Facilities", 
        description: "Train in a modern, fully-equipped environment. Our academy features state-of-the-art facilities with the latest tools and equipment, providing an optimal learning experience and preparing you for real-world construction sites." 
    }, 
    { 
        icon: 'calendar',
        title: "Flexible Scheduling", 
        description: "We offer flexible course schedules to fit your busy life. Whether you're a full-time worker, a student, or looking to switch careers, our morning, evening, and weekend classes are designed to accommodate your needs." 
    }, 
    { 
        icon: 'graduation',
        title: "Industry-Recognized Certifications", 
        description: "Boost your career with certifications that matter. Our courses are accredited and recognized by industry leaders, giving you a competitive edge in the job market. Demonstrate your skills and knowledge with qualifications that employers trust." 
    }, 
    { 
        icon: 'job',
        title: "Career Support and Job Placement", 
        description: "Your success is our priority. We provide comprehensive career support, including resume building, interview coaching, and job placement services. Benefit from our strong network of industry connections to jumpstart your career in bricklaying and plastering." 
    } 
];

const Card = ({icon, title, description}: {icon: any, title: String, description: String}) => {
    return (
        <div  className='col-span-12 p-[2rem] bg-[black] flex flex-col md:col-span-6 lg:col-span-4'>
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
            
            
        </div>
    )
}

const FeaturedHighlights = () => {
  return (
    <section className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616]'>
        <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
          {featureHighlights.map(hl => (
            <Card key={hl.title} icon={hl.icon} title={hl.title} description={hl.description} />
          ))}
        </div>
    </section>
  )
}

export default FeaturedHighlights