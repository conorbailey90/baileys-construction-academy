import Image from "next/image"
import { Check } from 'lucide-react';


const page = () => {
  return (
    <section id='about' className=' relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

    <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
        <div className=' pb-[2rem] col-start-1 col-span-12'>
            <h4 className='font-bold'>Bricklaying Courses</h4><br />
            <p className="text-balance">We offer comprehensive bricklaying courses tailored to meet the needs of both DIY enthusiasts and aspiring professionals. Our courses are designed to provide practical, hands-on experience with expert instruction from seasoned bricklayers. Whether you&apos;re looking to enhance your home improvement skills or build a career in bricklaying, we have the right course for you</p>
        </div>

        <div className="col-span-12 md:col-span-6 bg-[black] p-[2rem] border border-[black] border-[1px] rounded-[5px] bg-gradient-to-br from-[#FABC3C] to-[#FACC6B]">
          <h3 className='font-bold text-[black]'>Professional</h3>
          <br />
     
          <h5 className='font-bold text-[black]'>Course Features</h5>
          <ul><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Comprehensive Bricklaying Techniques: </span>Learn both basic and advanced bricklaying techniques, including laying bricks in different patterns (stretcher, header, English bond, Flemish bond, etc.).</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Advanced Wall Construction: </span>Gain expertise in constructing complex structures, including arches, piers, and retaining walls.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Blueprint Reading and Layout: </span>Learn how to read and interpret blueprints and technical drawings to execute construction plans accurately.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Advanced Mortar and Mixing: </span>In-depth training on various types of mortar, mixing techniques, and applications.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Structural Integrity and Load-Bearing: </span>Understand the principles of structural integrity, load-bearing walls, and the importance of proper bonding.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Health and Safety Regulations: </span>Comprehensive coverage of health and safety regulations relevant to construction sites and bricklaying.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Tools and Equipment Use: </span>Training on the use of professional bricklaying tools and equipment.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>Job Readiness: </span>Guidance on building a professional portfolio, interview preparation, and securing bricklaying jobs.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>On-site Work Experience: </span>Gain real-world experience with supervised on-site training, working on live projects.</p></li><br />

          </ul>

          <h5 className='font-bold text-[black]'>Course Duration</h5>
          <ul><br />
              <li className='flex items-center '><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>8 Weeks: </span>Full-time course (Monday to Friday), ideal for those looking to quickly enter the workforce.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px"  color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]' >16 Weeks:  </span>Part-time course (weekends), for those balancing studies with other commitments.</p></li><br />
          
          </ul>

          <h5 className='font-bold text-[black]'>Course Price:</h5>
          <br />
          <p className="text-[black]">£1,500 (includes all materials, equipment, and on-site training)</p>

        </div>      


        {/* {'diy'}       */}

        <div className=" col-span-12 md:col-start-7 md:col-span-6 bg-[black] p-[2rem] border border-[rgb(252,186,3)] border-[1px] rounded-[5px]">
          <h3 className='font-bold'>DIY</h3>
          <br />

          <h5 className='font-bold'>Course Features</h5>
          <ul><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Introduction to Bricklaying: </span>
                Learn the basics of bricklaying, including an overview of tools and materials.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Foundation Building: </span>
                Understand how to prepare and lay a solid foundation for brick structures.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Basic Wall Construction: </span>
                Hands-on practice in building single and double-skin walls.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Mortar Mixing: </span>
                Learn the right techniques for mixing mortar to achieve the best consistency and strength.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Pointing and Finishing: </span>
                Master the art of pointing and finishing to ensure your brickwork is durable and aesthetically pleasing.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Safety Practices: </span>
                Understand essential safety measures to prevent accidents and ensure safe handling of materials.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Basic Repairs: </span>
                Learn how to identify and repair common issues in brickwork, such as cracks and erosion.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Custom Projects: </span>
                Receive guidance on planning and executing your own small-scale bricklaying projects, such as garden walls or barbecues.
              </p>
            </li><br />
          </ul>

          <h5 className='font-bold'>Course Duration</h5>
          <ul><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>2 Days: </span>
                Intensive weekend workshop, perfect for those with a busy schedule.
              </p>
            </li><br />
          </ul>

          <h5 className='font-bold'>Course Price:</h5>
          <br />
          <p>£200 (includes all materials and equipment)</p>
        </div>

          
            {/* <div className=' relative p-[1rem] col-start-1 col-span-12 md:col-start-3 md:col-span-8 border border-[rgb(252,186,3)] border-[1px] aspect-[16/6] mb-[2rem] '>
                <div className='absolute inset-[1rem] '>
                    <Image 
                        style={{objectFit: "cover"}}
                        sizes="100vw" 
                        src="/bricklay.jpg"
                        alt="Background Image"
                        fill // Can be 'contain', 'cover', or 'none' based on your needs
                        quality={100} // Optional: Specify the quality of the image/
                    />
                </div>
            </div> */}
        
          
    </div>
</section>
  )
}

export default page