import React from 'react'
import { MapIcon } from '@heroicons/react/outline';



function Hero({ category, topTitle, description, img, location, property }) {

    const heroDiv = `relative ${img} h-full bg-cover bg-no-repeat bg-center shadow-lg`;
    return (
        <div className='h-screen'>

            <div className={heroDiv}>
                {/* <div className='absolute inset-0 w-full bg-black/40'></div> */}
                <div className='absolute inset-0 w-[100%] bg-gradient-to-b from-black/50 to-black/80'></div>

                <div className='relative h-full text-white text-center flex items-center'>
                    <div className=' max-w-[1500px] px-5 mx-auto '>
                        <div className='text-[20px] tracking-normal'>
                            <span className=' font-extralight'>{category}</span>
                        </div>
                        <div className='text-[48px] leading-[48px] mt-6 tracking-tight font-bold lg:text-[60px] lg:leading-[60px] w-full'>
                            <span className=''>{topTitle}</span>
                        </div>
                        <div className=' text-[24px] leading-[30px] mt-8 max-w-170 h-2 text-gray-400 tracking-tight font-extralight'>
                            {description}
                        </div>
                        {
                            (location && property) ?
                                <div className=' text-sm leading-[30px] mt-12 max-w-170 h-2 text-gray-400 tracking-tight font-extralight'>
                                    <div>
                                        {location} | {property}
                                    </div>
                                </div>
                                : ""
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
