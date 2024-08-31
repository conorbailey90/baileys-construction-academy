import Image from "next/image";
import { Check } from 'lucide-react';

const page = () => {
  return (
    <section id='about' className='relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

      <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
        
        <div className='relative pb-[2rem] col-span-12 md:col-span-6'>
          <h4 className='font-bold text-[white]'>Bricklaying Courses</h4><br />
          <p className="text-[white]">We offer comprehensive bricklaying courses tailored to meet the needs of both DIY enthusiasts and aspiring professionals. Our courses are designed to provide practical, hands-on experience with expert instruction from seasoned bricklayers. Whether you&apos;re looking to enhance your home improvement skills or build a career in bricklaying, we have the right course for you.</p>
        </div>
        {/* Professional */}
        <div className="col-span-12 row-start-2 md:col-span-6 bg-[black] p-[2rem] border border-[black] border-[1px] rounded-[5px] bg-gradient-to-br from-[#FABC3C] to-[#FACC6B]">
          <h3 className='font-bold text-[black]'>Professional</h3>
          <br />
          <h5 className='font-bold text-[black]'>Course Overview</h5><br />
          <p className='text-[black]'>This intensive 5-day bricklaying course is designed for individuals looking to gain practical skills and knowledge in bricklaying, culminating in an NVQ qualification. Participants will learn essential techniques and safety protocols while constructing various types of walls and installing lintels.</p>
          <br />
          <h5 className='font-bold text-[black]'>Day-by-Day Breakdown</h5><br />
          <ul className='text-[black]'>
            <li><span className='font-semibold text-[black]'>Day 1: Introduction and Fundamentals</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Introduction to the course and overview of NVQ qualification requirements. Health and Safety Training: Focus on site safety, including fire safety protocols.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Introduction to Equipment: Setting up the mixer and mixing materials. Reading Drawings: Understanding wall designs and construction drawings. Practical Activity: Begin constructing a 4-inch wall with a corner based on a basic drawing.</p></li>
            </ul><br />
            <li><span className='font-semibold text-[black] '>Day 2: Skill Development</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Practical Exercise: Knock down and rebuild the 4-inch wall as many times as needed to perfect the technique.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Advanced Construction: Build a 9-inch wall with bricks laid on edge, focusing on precision and alignment.</p></li><br />
            </ul>
            <li><span className='font-semibold text-[black]'>Day 3: Advanced Techniques</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Cavity Wall Construction: Introduction to the concept of cavity walls, including damp proof courses (DPC) and cavity insulation.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Practical Application: Construct a cavity wall incorporating wall ties and insulation materials.</p></li><br />
            </ul>
            <li><span className='font-semibold text-[black]'>Day 4: Mastery of Cavity Walls</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Full Day Activity: Hands-on Practice: Continue constructing various types of cavity walls, refining skills and techniques learned in previous sessions.</p></li><br />
            </ul>
            <li><span className='font-semibold text-[black]'>Day 5: Finishing Touches</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Lintel Installation: Learn the process of installing new lintels for window openings, focusing on structural integrity.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Pointing Techniques: Understand how to point bricks effectively to ensure quality and durability.</p></li>
            </ul>
          </ul>
          <br />
          <h5 className='font-bold text-[black]'>Learning Outcomes</h5><br />
          <ul className='text-[black]'>
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Read and interpret construction drawings accurately.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Set up a construction site using string lines, laser levels, and spirit levels.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Lay bricks and blocks with precision.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Install lintels, wall ties, and wall starters.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Utilize trowels and master essential bricklaying techniques.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Mix cement correctly for various applications.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Point bricks and finish walls to a professional standard.</p></li>
          </ul>
          <br />
          <p className='text-[black]'>This guide is designed for both novice and experienced individuals seeking to enhance their bricklaying skills while achieving a recognized qualification. Join us for an enriching experience in the world of bricklaying!</p>
          <br />
          <h5 className='font-bold text-[black]'>Course Duration</h5>
          <ul><br />
            <li className='flex items-center '><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>5 Days: </span>Intensive full-time course covering all aspects of professional bricklaying.</p></li><br />
          </ul>

          <h5 className='font-bold text-[black]'>Course Price:</h5>
          <br />
          <p className="text-[black]">£800 (includes all materials, equipment, and on-site training)</p>

        </div>      


        {/* DIY */}
        <div className="col-span-12 row-start-3 md:row-start-2 md:col-start-7 md:col-span-6 bg-[black] p-[2rem] border border-[rgb(252,186,3)] border-[1px] rounded-[5px]">
          <h3 className='font-bold text-[white]'>DIY</h3>
          <br />

          <h5 className='font-bold text-[white]'>Course Features</h5>
          <ul className='text-[black]'><br />
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

          <h5 className='font-bold text-[white]'>Course Duration</h5>
          <ul><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>2 Days: </span>
                Intensive workshop
              </p>
            </li><br />
          </ul>

          <h5 className='font-bold text-[white]'>Course Price:</h5>
          <br />
          <p className='text-[white]'>£500 (includes all materials and equipment)</p>
        </div>

      </div>
    </section>
  )
}

export default page;
