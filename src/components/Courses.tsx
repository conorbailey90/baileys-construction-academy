

import React from 'react';
import { CoursesTile } from './CoursesTile';

const courses = [
    {
        title: "Professional Bricklaying Course",
        description: "Become a Certified Bricklaying Expert",
        details:
          "Designed for those pursuing a career in construction, this comprehensive course covers advanced bricklaying techniques, structural principles, and safety standards. Earn your NVQ Level qualification and build a strong foundation for your professional career.",
        image: '/bricklay.jpg',
        href: '/bricklaying'
      },
      {
        title: "Professional Plastering Course",
        description: "Achieve Industry-Recognized Certification",
        details:
          "Master the art of plastering with our in-depth course that focuses on both traditional and modern techniques. From basic skills to advanced decorative finishes, this program prepares you for NVQ Level qualifications and a successful career in plastering.",
        href: '/plastering'
      },
    {
      title: "DIY Bricklaying Course",
      description: "Perfect for Home Projects",
      details:
        "Learn the essentials of bricklaying to tackle your own DIY projects. This beginner-friendly course covers basic techniques, tools, and safety tips, empowering you to create sturdy, attractive brickwork for your home.",
      href: '/bricklaying'
    },
    {
      title: "DIY Plastering Course",
      description: "Transform Your Living Space",
      details:
        "Gain practical plastering skills to renovate and beautify your home. This course teaches you how to prepare surfaces, apply plaster, and achieve smooth, professional-looking finishes, perfect for any DIY enthusiast.",
    image: '/plastering.jpeg',
    href: '/plastering'
    },
   
  ];
  

const Courses = () => {
  return (
    <section id='courses' className=' relative w-[100%] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>
    <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
         <h4 className='col-span-12 font-bold'>Explore Our Range of Courses</h4>
         {courses.map((course, idx) => (
            <CoursesTile key={course.title} idx={idx} title={course.title} description={course.description} details={course.details} image={course.image!} href={course.href} />
         ))}
    </div>
</section>
  )
}

export default Courses