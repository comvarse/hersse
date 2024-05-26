import React, { useEffect } from 'react'
import Image from 'next/image'

function Guide() {
    return (
        <div className=' px-5'>
            <div className='max-w-[1300px] w-full mx-auto  border-[1px] border-gray-400/60'>
                <div className='grid gap-0 w-full mx-auto sm:grid-cols-1 md:grid-cols-2'>
                    <div className=' flex items-center col-span-1'>
                        <div className=' m-8'>
                            <div className='text-3xl w-full font-semibold'>Do you have an idea, we can help achieve your dream project?</div>
                            <div className=' text-md text-gray-600 mt-4'>We have the expertise to help you create your dream software application and drive success in your chosen field.</div>
                            <hr className=' mt-8' />
                            <div className=' mt-4  font-bold text-[15px] text-orange-700'>
                                <span>CONTACT US: </span>
                                <span className=' font-bold text-black-500 ml-5'>INFO@HERSSE.COM</span>

                            </div>
                        </div>
                    </div>
                    <div className=' relative col-span-1 w-[100%] h-[200px] sm:h-[200px] md:h-full '>
                        <Image
                            src={"https://enviragallery.com/wp-content/uploads/2015/12/what-is-depth-of-field.jpg"}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            alt="info"
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Guide
