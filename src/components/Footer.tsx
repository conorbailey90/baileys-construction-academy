import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer id='footer' className=' relative w-[100%] min-h-[300px] flex justify-center bg-[black]'>
        <div className='w-[95%] max-w-[1880px] relative z-2 pt-[30px] pb-[30px] grid grid-cols-12 auto-rows-min gap-[10px]'>
            <div className='col-span-12 md:col-span-6 mt-[2rem]'>
            <h6 style={{fontSize: '1rem', fontFamily: 'montserrat', fontWeight: 'bold', letterSpacing: '-.05em'}} className="flex col-span-3 items-center uppercase text-[rgb(252,186,3)]">Essex Bricklaying & <br />Plastering School</h6>

                <div className='mt-[1rem] flex items-center'>
                    <a href="">
                        <svg className='w-[25px] mr-[1rem] cursor-pointer ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className={styles.path} fill='#FFFFFF'  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
                    </a>
                    <a href="">
                        <svg className='w-[26px] mr-[1rem] cursor-pointer'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className={styles.path} fill='#FFFFFF' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a href="">
                        <svg className='w-[34px] mr-[1rem] cursor-pointer'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path className={styles.path} fill='#FFFFFF' d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                    </a>
                </div>
            </div>
            <div className='col-span-12 flex flex-col mt-[2rem] md:col-span-6'>
                <h6 className='font-semibold'>Courses</h6>
                <br />
                <ul>
                    <li><Link className='hover:text-[rgb(252,186,3)]' href={'/bricklaying'}>Profesional Bricklaying</Link></li>
                    <li><Link className='hover:text-[rgb(252,186,3)]' href={'/plastering'}>Profesional Plastering</Link></li>
                    <li><Link className='hover:text-[rgb(252,186,3)]' href={'/bricklaying'}>DIY Bricklaying</Link></li>
                    <li><Link className='hover:text-[rgb(252,186,3)]' href={'/plastering'}>DIY Plastering</Link></li>
                </ul>
            </div>

            <div className='col-span-12 mt-[2rem] md:col-span-6'>
                <h6 className='font-semibold'>Address</h6>
                <br />
                <p>Unit 15 Ilford Trading Estate</p>
                <p>Paycocke Road</p>
                <p>Basildon</p>
                <p>SS14 3DR</p>
                <br />

                <p>01277 532991</p>
            </div>
        
            
        </div>
    </footer>
  )
}

export default Footer