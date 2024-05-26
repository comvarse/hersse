import React from 'react'
import Link from 'next/link'
function InfoCard() {
    return (
        <div className=' px-5'>
            <div className='max-w-[1300px] mx-auto border-t border-gray-300 '>

                <div className='h-8'></div>
                <div className='grid gap-5 w-full lg:grid-cols-12 lg:gap-10'>
                    <div className=' col-span-5 bg-cover bg-blue-50 bg-[url("/img/bcpc.avif")] bg-center'>


                    </div>
                    <div className=' col-span-7'>
                        <h3 className='text-[40px] md:text-[40px] lg:text-[50px] 2xl:text-[50px] font-black leading-[40px]'>Blockchain, CBDC & AI</h3>
                        <div className='text-[20px] text-gray-500 font-extralight mt-6 leading-7 md:text-[22px]'>We create Blockahain, AI and Web Solutions that power our clients strategic objectives.</div>

                        <div className='mt-5'>

                            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 md:gap-2'>

                                <div className='  mt-2 py-5 '>
                                    <div className=''>
                                        Blockchain & AI
                                    </div>
                                    <div className=' border-t-[3px] border-gray-500/50 text-2xl mt-2 md:text-[32px] leading-7 md:leading-[36px] lg:leading-[45px] font-black text-gray font-sans pt-4'>
                                        Machine Learning, Crypto, Blockchain, Artificial Intelligence Apps are the future.
                                    </div>
                                    <div className=' mt-4 font-bold'>
                                        <Link href={"/contact"}>Talk to us</Link>
                                    </div>
                                </div>
                                <div className='  mt-2 py-5 '>
                                    <div className=''>
                                        Web 4.0 Applications
                                    </div>
                                    <div className='border-t-[3px] border-gray-500/50 border-[1px]  mt-2 p-5'>
                                        <div className='text-2xl font-bold leading-7'>
                                            Web 4.0 UI Components: Adopt and Adapt
                                        </div>
                                        <div className=' mt-3 font-serif text-lg'>We create or customize state-of-the-art, trendy Web3 and Web4 technologies to integrate with legacy backend solutions</div>
                                        <div className=' mt-4 font-bold text-right'>
                                            <Link href={"/contact#talktous"}>Contact us</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
