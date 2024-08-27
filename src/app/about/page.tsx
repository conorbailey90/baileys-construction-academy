import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const page = () => {
  return (
    <section id='about' className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

    <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>

        <div className=' relative p-[1rem] col-start-3 col-span-8 border border-[rgb(252,186,3)] border-[1px] aspect-square md:col-span-4 md:col-start-2 '>
            <div className='absolute inset-[1rem]  '>
            <Image 
                style={{objectFit: "cover"}}
                sizes="100vw" 
                src="/plasterer.jpg"
                alt="Background Image"
                fill // Can be 'contain', 'cover', or 'none' based on your needs
                quality={100} // Optional: Specify the quality of the image/
             />
            </div>
            
        </div>
        <div className=' pb-[2rem] col-start-1 col-span-12 md:col-start-7 md:col-span-6 row-start-1'>
            <h4 className='font-bold'>About Us: Bailey&apos;s Bricklaying & Plastering Academy</h4><br />
            <p className='text-balance'>Welcome to Bailey&apos;s Bricklaying & Plastering Academy, where passion meets precision, and skills are forged in the foundation of quality craftsmanship. We are a premier training institution dedicated to teaching the art and science of bricklaying and plastering. Our mission is to empower individuals with the knowledge, hands-on experience, and professional expertise needed to excel in the construction industry.</p>
            <br />
            <h5 className='font-bold'>Our Story</h5>
            <br />
            <p className='text-balance'>Bailey&apos;s Bricklaying & Plastering Academy was founded with a simple yet powerful vision: to create a world-class learning environment for aspiring bricklayers and plasterers. With over 25 years of experience in the construction industry, our founder, Paul Bailey, recognized a gap in quality education and training for these vital trades. Driven by a passion for building and a commitment to craftsmanship, Paul established the academy to offer comprehensive, industry-relevant training that bridges the gap between theory and practice.</p>
            <br />
            <h5 className='font-bold'>Our Mission</h5>
            <br />
            <p className='text-balance'>At Bailey&apos;s Bricklaying & Plastering Academy, our mission is to provide top-tier training that prepares our students for successful and rewarding careers in the construction industry. We believe in:</p>

            <ul><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Excellence in Training:</span> Our courses are designed to meet the highest industry standards, ensuring that our students are well-equipped to meet the demands of modern construction projects.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Hands-On Learning:</span> We emphasize practical experience through hands-on training in a realistic, safe, and supportive environment, allowing students to master the skills they need to succeed on the job.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Commitment to Quality:</span> We are dedicated to teaching the importance of quality workmanship, safety, and professionalism in every aspect of bricklaying and plastering.</p></li><br />
            </ul>
            <h5 className='font-bold'>What We Offer</h5>
            <br />
            <p className='text-balance'>Bailey&apos;s Bricklaying & Plastering Academy offers a range of courses designed to cater to all levels of experience, from beginners to seasoned professionals looking to enhance their skills. Our programs include:</p>
            <ul><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Beginner Bricklaying and Plastering Courses:</span> Perfect for those just starting in the trade, these courses provide foundational knowledge and essential skills needed to begin a career in bricklaying and plastering.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Advanced Techniques and Specializations: </span> For those looking to refine their craft, our advanced courses cover specialized techniques, including decorative brickwork, rendering, and advanced plastering methods.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Certification and Apprenticeship Programs:</span> We offer accredited certification courses and apprenticeship opportunities, giving students the credentials and real-world experience needed to excel in the industry.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Customized Training:</span> We also provide bespoke training solutions tailored to the needs of companies and individuals, ensuring that our students receive the most relevant and practical instruction.</p></li><br />
            </ul>
            <h5 className='font-bold'>Our Facilities</h5>
            <br />
            <p className='text-balance'>Our state-of-the-art training facility is equipped with everything students need to learn and practice their skills. From spacious workshops to advanced tools and materials, our academy is designed to replicate real-world conditions, ensuring that students gain valuable hands-on experience in a controlled and safe environment. Our instructors are industry veterans who bring a wealth of knowledge, experience, and passion for teaching, ensuring that each student receives personalized attention and mentorship.</p>
            <br />
            <h5 className='font-bold'>Why Choose Us?</h5>
            <ul><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Experienced Instructors: </span> Our team consists of seasoned professionals who have spent decades in the field. They are dedicated to passing on their knowledge and expertise to the next generation of tradespeople.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Comprehensive Curriculum: </span> Our courses are developed in collaboration with industry experts to ensure they are relevant, up-to-date, and aligned with current standards and best practices.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Career Support:</span> We provide ongoing support to our students, including job placement assistance, career advice, and access to a network of industry professionals.</p></li><br />
                <li className='flex items-center'><Check color='rgb(252,186,3)' className='mr-[1rem]' /><p><span className='font-semibold'>Community and Networking:</span> When you join Bailey&apos;s, you become part of a supportive community of like-minded individuals who are passionate about the trade. Our alumni network offers valuable opportunities for networking and career growth.</p></li><br />
            </ul>

            <h5 className='font-bold'>Join Us Today!</h5>
            <br />
            <p className='text-balance'>Whether you are just starting out or looking to enhance your skills, Bailey&apos;s Bricklaying & Plastering Academy is here to help you build a solid foundation for your future. Our commitment to quality education and training ensures that you will receive the best possible preparation for a successful career in the construction industry.</p>
            <br />
            <p className='text-balance'>Explore our courses, meet our instructors, and discover what makes Bailey&apos;s Bricklaying & Plastering Academy the preferred choice for aspiring bricklayers and plasterers. We look forward to helping you lay the first brick on your path to success!</p>
            <br />
            <h5 className='font-bold'>Join Us Today!</h5>
            <br />
            <p className='text-balance'>Ready to take the next step? Contact us today to learn more about our courses, schedule a tour of our facilities, or speak with one of our advisors.</p>
        </div>
          
    </div>
</section>
  )
}

export default page