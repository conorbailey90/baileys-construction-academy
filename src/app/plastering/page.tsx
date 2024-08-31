import Image from "next/image";
import { Check } from 'lucide-react';

const page = () => {
  return (
    <section id='about' className='relative w-[100%] min-h-[500px] flex justify-center bg-[#161616] pt-[40px] md:pt-[100px]'>

      <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
        
        <div className='pb-[2rem] col-span-12 md:col-span-6'>
          <h4 className='font-bold text-[white]'>Plastering Courses</h4><br />
          <p className="text-[white]">We offer comprehensive plastering courses tailored to meet the needs of both DIY enthusiasts and aspiring professionals. Our courses provide practical, hands-on experience with expert instruction from seasoned plasterers. Whether you&apos;re looking to enhance your home improvement skills or build a career in plastering, we have the right course for you.</p>
        </div>
        {/* Professional */}
        <div className="col-span-12 row-start-2 md:col-span-6 bg-[black] p-[2rem] border border-[black] border-[1px] rounded-[5px] bg-gradient-to-br from-[#FABC3C] to-[#FACC6B]">
          <h3 className='font-bold text-[black]'>Professional</h3>
          <br />
          <h5 className='font-bold text-[black]'>Course Overview</h5><br />
          <p className='text-[black]'>This intensive 5-day plastering course is designed for individuals looking to gain practical skills and knowledge in plastering, culminating in an NVQ qualification. Participants will learn essential techniques and safety protocols while working on various plastering applications.</p>
          <br />
          <h5 className='font-bold text-[black]'>Day-by-Day Breakdown</h5><br />
          <ul className='text-[black]'>
            <li><span className='font-semibold text-[black]'>Day 1: Introduction and Fundamentals</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Introduction to the course and overview of NVQ qualification requirements. Health and Safety Training: Focus on site safety, including handling of plastering materials.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Introduction to Tools and Materials: Understanding plastering tools and mixing materials. Reading Plastering Plans: Interpreting plastering designs and plans. Practical Activity: Begin applying plaster on a small wall section.</p></li>
            </ul><br />
            <li><span className='font-semibold text-[black] '>Day 2: Skill Development</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Practical Exercise: Reapply plaster on the wall section to refine technique and consistency.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Advanced Plastering: Techniques for applying plaster to complex surfaces and achieving a smooth finish.</p></li><br />
            </ul>
            <li><span className='font-semibold text-[black]'>Day 3: Advanced Techniques</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Dry Lining and Plasterboard Installation: Introduction to dry lining techniques and plasterboard fitting.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Practical Application: Install plasterboard and apply finishing plaster to create a seamless surface.</p></li><br />
            </ul>
            <li><span className='font-semibold text-[black]'>Day 4: Mastery of Plastering</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Full Day Activity: Hands-on Practice: Continue refining plastering skills with various wall and ceiling surfaces.</p></li><br />
            </ul>
            <li><span className='font-semibold text-[black]'>Day 5: Finishing Touches</span></li><br />
            <ul>
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Morning Session: Decorative Plastering Techniques: Learn techniques for decorative plaster finishes, including textures and patterns.</p></li><br />
              <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Afternoon Session: Quality Control: Ensuring high standards in plastering work, including common issues and troubleshooting.</p></li>
            </ul>
          </ul>
          <br />
          <h5 className='font-bold text-[black]'>Learning Outcomes</h5><br />
          <ul className='text-[black]'>
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Accurately apply various plastering techniques and finishes.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Properly mix and apply plastering materials.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Install plasterboard and complete dry lining with professional standards.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Implement decorative plastering techniques for enhanced aesthetics.</p></li><br />
            <li className='flex items-center'><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'>Ensure high-quality finishes and identify common plastering issues.</p></li>
          </ul>
          <br />
          <p className='text-[black]'>This guide is designed for both novice and experienced individuals seeking to enhance their plastering skills while achieving a recognized qualification. Join us for an enriching experience in the world of plastering!</p>
          <br />
          <h5 className='font-bold text-[black]'>Course Duration</h5>
          <ul><br />
            <li className='flex items-center '><Check className='flex-[1]' size="20px" color='black' /><p className='flex-[11] text-[black]'><span className='font-semibold text-[black]'>5 Days: </span>Intensive full-time course covering all aspects of professional plastering.</p></li><br />
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
                <span className='font-semibold'>Introduction to Plastering: </span>
                Learn the basics of plastering, including an overview of tools and materials.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Surface Preparation: </span>
                Understand how to prepare surfaces for plastering, including cleaning and priming.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Basic Plastering Techniques: </span>
                Hands-on practice in applying plaster to walls and ceilings.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Mixing Plaster: </span>
                Learn the right techniques for mixing plaster to achieve the best consistency and strength.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Finishing Techniques: </span>
                Master the art of finishing to ensure your plastering is smooth and professional.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Safety Practices: </span>
                Understand essential safety measures to prevent accidents and ensure safe handling of plastering materials.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Basic Repairs: </span>
                Learn how to identify and repair common issues in plastering, such as cracks and uneven surfaces.
              </p>
            </li><br />
            <li className='flex items-center'>
              <Check className='flex-[1]' size="20px" color='rgb(252,186,3)' />
              <p className='flex-[11]'>
                <span className='font-semibold'>Custom Projects: </span>
                Receive guidance on planning and executing your own small-scale plastering projects.
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
          <p className="text-[white]">£500 (includes all materials and equipment)</p>
        </div>

      </div>
    </section>
  )
}

export default page;
