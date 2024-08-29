'use client'

import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
      author: "John Doe",
      testimonial:
        "The DIY Bricklaying Course was perfect for me as a beginner. The instructors were incredibly knowledgeable and made sure I understood each step. Now, I feel confident taking on my own home projects!",
    },
    {
      author: "Sarah Smith",
      testimonial:
        "I enrolled in the Professional Plastering Course to advance my career, and it was the best decision I've made. The hands-on training and expert guidance helped me get my NVQ Level certification and land a great job.",
    },
    {
      author: "Mark Johnson",
      testimonial:
        "The academy's Professional Bricklaying Course exceeded my expectations. The instructors are top-notch, and the facilities are excellent. I highly recommend this course to anyone looking to build a solid career in construction.",
    },
    {
      author: "Emily Davis",
      testimonial:
        "I loved the DIY Plastering Course! It was so helpful for learning how to fix up my home. The class was well-structured, and the instructor was very patient and explained everything clearly.",
    },
    {
      author: "Michael Brown",
      testimonial:
        "The instructors at this academy really know their stuff. The Professional Bricklaying Course was challenging but rewarding. I learned so much and now feel ready to tackle any project, big or small.",
    },
  ];

const Testimonial = ({testimonial, author}: {testimonial: string, author: string}) => {
    return (
        <div className="relative w-[100%] shrink-0 py-[5rem] px-[3rem] border border-[black] border-[1px] flex flex-col justify-center items-space-between md:w-[50%]">
            <Quote size={100} strokeWidth={1} opacity={.3}  className="absolute top-[1rem] left-[1rem] scale-x-[-1]" />
            <Quote size={100} strokeWidth={1} opacity={.3} className="absolute bottom-[1rem] right-[1rem] " />
            <p className="text-center text-balance">{testimonial}</p><br />
            <p className="text-center font-semibold text-[rgb(252,186,3)]">{author}</p>
        </div>
    )
}

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);

    useEffect(() => {
        // Define a function to update the width
        const updateWidth = () => {
          setCurrentWidth(window.innerWidth);
        };
    
        // Call updateWidth to set the initial width when the component mounts
        updateWidth();
    
        // Add event listener for window resize
        window.addEventListener('resize', updateWidth);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []); // Empty dependency array to run only on mount and unmount
    

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
        );
      };
  return (
    <section className='relative w-[100%] flex flex-col items-center bg-[#161616] py-[30px]'>
        <div style={{borderLeft: '1px solid black', borderRight: '1px solid black',}} className='w-[95%] max-w-[1880px] h-[100%] relative z-2 overflow-hidden '>
      
            <div style={{ transform: `translateX(calc(-${currentIndex * (currentWidth >= 768 ? 50 : 100)}% - ${10 * currentIndex}px))` }} className="relative ease-in duration-300 w-[100%] h-[100%] flex gap-[10px]">
                {testimonials.map((t,idx) => (
                    <Testimonial testimonial={t.testimonial} author={t.author} key={idx} />
                ))}
            </div>
            <button className="absolute left-[0] bottom-[0] flex justify-center items-center bg-[black] p-[1rem] hover:opacity-[0.5]" onClick={prevSlide}><ChevronLeft /></button>
            <button className="absolute right-[0] bottom-[0] flex justify-center items-center bg-[black] p-[1rem] hover:opacity-[0.5]" onClick={nextSlide}><ChevronRight /></button>
        </div>
    </section>
  )
}

export default Testimonials