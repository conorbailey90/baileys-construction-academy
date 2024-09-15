
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id='hero' className='relative w-[100%] min-h-[90vh] flex justify-center pb-[60px]'>
        <Image
        className='absolute inset-0 '
        src="/brick.jpg"
        alt="Background Image"
        style={{objectFit: "cover"}}
        fill // Can be 'contain', 'cover', or 'none' based on your needs
        quality={100} // Optional: Specify the quality of the image
        sizes="100vw"
        priority={true}
        />
        <div className=' absolute inset-0 bg-[black] opacity-65 z-2'> 
        </div>
        <div className='w-[95%] max-w-[1880px] relative z-2 pt-[180px] grid grid-cols-12 auto-rows-min gap-[10px]'>
            <div className='col-start-1 row-start-1 col-span-12 md:col-span-8 lg:col-span-6  '>
                <h1 className='text-balance leading-[1.1] font-semibold'>Build Your Future with Expert Training in <span className='text-[rgb(252,186,3)]'>Bricklaying</span> & <span className='text-[rgb(252,186,3)]'>Plastering</span></h1>
            </div>
           
            <div className='col-start-1 col-span-12 md:col-span-8 md:col-start-1 pt-[1rem] lg:col-span-6 lg:col-start-1'>
                <p className='font-semibold'>Learn from industry experts and gain the practical skills you need to excel in construction. Our comprehensive courses in bricklaying and plastering are designed to help you build a solid foundation for a successful career. <br /><br/> Whether you&#39;re starting out or looking to enhance your skills, our academy in Essex offers the perfect environment for learning and growth.</p>
            </div>

            <div className='col-start-1 col-span-12 md:col-span-6 md:col-start-1 flex gap-[10px] pt-[1rem]'>
                <Link href={'/enroll'}>
                    <div className='flex-1 p-4 bg-[rgb(252,186,3)] border border-[black] border-[1px] rounded-[5px]'>
                        <p className='text-black font-bold '>Enroll Today</p>
                    </div>
                </Link>
                <Link  href={'/#about'}>
                    <div className='flex-1 border border-[black] border-[1px] p-4 bg-[black] rounded-[5px]'>
                        <p className='text-[rgb(252,186,3)] font-bold'>Find Out More</p>
                    </div>
                </Link>
            </div>
        </div>
        <h6 className='absolute bottom-[1rem] w-[100%] text-center text-[rgb(252,186,3)] font-semibold'>Scroll</h6>

    </section>
  )
}

export default Hero