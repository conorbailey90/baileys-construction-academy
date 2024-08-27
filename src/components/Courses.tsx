import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const courses = [
    {
        title: "Professional Bricklaying Course",
        description: "Become a Certified Bricklaying Expert",
        details:
          "Designed for those pursuing a career in construction, this comprehensive course covers advanced bricklaying techniques, structural principles, and safety standards. Earn your NVQ Level qualification and build a strong foundation for your professional career.",
        image: '/bricklay.jpg'
      },
      {
        title: "Professional Plastering Course",
        description: "Achieve Industry-Recognized Certification",
        details:
          "Master the art of plastering with our in-depth course that focuses on both traditional and modern techniques. From basic skills to advanced decorative finishes, this program prepares you for NVQ Level qualifications and a successful career in plastering.",
      },
    {
      title: "DIY Bricklaying Course",
      description: "Perfect for Home Projects",
      details:
        "Learn the essentials of bricklaying to tackle your own DIY projects. This beginner-friendly course covers basic techniques, tools, and safety tips, empowering you to create sturdy, attractive brickwork for your home.",
    },
    {
      title: "DIY Plastering Course",
      description: "Transform Your Living Space",
      details:
        "Gain practical plastering skills to renovate and beautify your home. This course teaches you how to prepare surfaces, apply plaster, and achieve smooth, professional-looking finishes, perfect for any DIY enthusiast.",
    image: '/plastering.jpeg'
    },
   
  ];
  
  const Card = ({title, description, details, image}: {title: String, description: String, details: String, image: string }) => {
    return (
        <div className='relative col-span-12 p-[2rem] bg-[black] flex flex-col md:col-span-6 border border-[black] border-[1px]'>
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
            <Link href={'/'}>
                <button className='mt-[1rem] text-[rgb(252,186,3)] font-bold'>Learn More</button>
            </Link>
        </div>
    )
}

const Courses = () => {
  return (
    <section id='courses' className=' relative w-[100%] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

    <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>

         <h4 className='col-span-12 font-bold'>Explore Our Range of Courses</h4>
         {courses.map(course => (
            <Card key={course.title} title={course.title} description={course.description} details={course.details} image={course.image!} />
         ))}
        
          
    </div>
</section>
  )
}

export default Courses