import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='relative w-full min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

      <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>

        <div className='relative p-[1rem] col-start-1 col-span-12 md:col-start-3 md:col-span-8 border border-[rgb(252,186,3)] border-[1px] aspect-[16/6]'>
          <div className='absolute inset-[1rem]'>
            <Image 
              style={{objectFit: "cover"}}
              sizes="100vw" 
              src="/plasterer.jpg"
              alt="Background Image"
              fill
              quality={100}
            />
          </div>
        </div>

        <div className='pb-[2rem] col-start-1 col-span-12 md:col-start-3 md:col-span-8 row-start-2 pt-[2rem]'>
          <h4 className='font-bold text-balance'>About Us</h4>
          <br />
          <p className='text-balance'>Welcome to Bricklaying & Plastering Courses - Essex! We&apos;re here to help you get hands-on experience in bricklaying and plastering. Whether you&apos;re starting a career or just learning for your DIY projects, our practical training suits all skill levels.</p>
          <br />
          <h5 className='font-bold'>Our Story</h5>
          <br />
          <p className='text-balance'>Bricklaying & Plastering Courses - Essex was founded with a clear mission: to provide high-quality training for those interested in bricklaying and plastering. With over 30 years in the construction industry, our founder, Paul Bailey, saw a need for better training in these essential trades. This has led to the creation of our school, where we bridge the gap between theory and practice with hands-on learning.</p>
          <br />
          <h5 className='font-bold'>Our Mission</h5>
          <br />
          <p className='text-balance'>Our goal is to deliver top-notch training that helps you thrive in the construction industry. Here&apos;s what we focus on:</p>
          <ul><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Quality Training:</span> Our courses meet industry standards, preparing you for modern construction projects.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Hands-On Learning:</span> We emphasize practical experience, giving you real skills with the tools and techniques used in the field.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Focus on Quality:</span> We teach the importance of good workmanship and safety, so you can work confidently and professionally.</p></li><br />
          </ul>
          <h5 className='font-bold'>What We Offer</h5>
          <br />
          <p className='text-balance'>Our 5-day courses cater to everyone, from new beginners, DIY projects, if you want a refresher, looking for a career change to those looking to enhance their skills. Here&apos;s what we provide:</p>
          <ul><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Beginner Courses:</span> Ideal for newcomers, these courses cover the basics of bricklaying and plastering and cover a broad learning spectrum.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Advanced Techniques:</span>  For those looking to refine their skills, we offer courses in areas like decorative brickwork and rendering.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Internal Certification </span> awarded by “BRICKLAYING & PLASTERING COURSES - ESSEX”</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Customised Training:</span> We also offer tailored training for companies and individuals to meet specific needs.</p></li><br />
          </ul>
          <h5 className='font-bold'>Our Facilities</h5>
          <br />
          <p className='text-balance'>Our training space is designed to mimic real-world conditions, providing you with a safe and supportive environment. With advanced tools and materials, our facilities are equipped for hands-on practice. Our experienced instructors offer personalized guidance to ensure you get the most from your training.</p>
          <br />
          <h5 className='font-bold'>Why Choose Us?</h5>
          <ul><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Experienced Instructors:</span> Learn from skilled professionals with years of field experience, dedicated to sharing their knowledge.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Practical Curriculum:</span> Our courses are updated with input from industry experts to ensure they’re relevant and effective.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='rgb(252,186,3)' /><p className='flex-[11]'><span className='font-semibold'>Community Feel:</span> Join a supportive network of individuals who share your interest in the trade. Our community offers valuable networking opportunities.</p></li><br />
          </ul>
          <div className='relative p-[1rem] col-start-1 col-span-12 md:col-start-3 md:col-span-8 border border-[rgb(252,186,3)] border-[1px] aspect-[16/6] mb-[2rem]'>
            <div className='absolute inset-[1rem]'>
              <Image 
                style={{objectFit: "cover"}}
                sizes="100vw" 
                src="/bricklay.jpg"
                alt="Background Image"
                fill
                quality={100}
              />
            </div>
          </div>

          <h5 className='font-bold'>Join Us Today!</h5>
          <br />
          <p className='text-balance'>If you are looking to start or advance your skills, Bricklaying & Plastering Courses - Essex is here to help you build a strong foundation for your future. Our hands-on approach ensures you are well-prepared for a successful career in the construction industry.</p>
          <br />
          <p className='text-balance'>Explore our courses, meet our team, and see why Bricklaying & Plastering Courses - Essex is a great choice for learning the trade. We look forward to helping you get started!</p>
          <br />
          <h5 className='font-bold'>Contact Us</h5>
          <br />
          <p className='text-balance'>Ready to take the next step? Reach out to us to learn more about our courses, book a tour, or speak with one of our advisors.</p>
        </div>
      </div>
    </section>
  )
}

export default About
