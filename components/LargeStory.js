import React from 'react'

function LargeStory() {
    const bg1 = `bg-[url("/img/delivr.jpeg")]`;
    const bgcss = `w-[100%] h-[500px] relative ${bg1} bg-cover bg-no-repeat bg-center shadow-inner`;

    return (
        <div>
            <div className={bgcss}>
                <div className=' h-full grid md:grid-cols-2 place-content-center px-5 sm:grid-cols-1 lg:grid-cols-12 xl:grid-cols-2'>
                    <div className=' h-auto bg-blue-50 px-9 pt-9 pb-7 lg:col-span-8 xl:col-span-1'>
                        <div className=' text-2xl leading-7 font-semibold '>Clients rely on us to deliver on promises to its customers</div>
                        <div className=' mt-3'>
                            <button className=' px-5 py-3 bg-red-600 text-white uppercase text-[13px]'>
                                Contact us</button>
                        </div>
                    </div>
                    <div className='lg:col-span-4 xl:col-span-1'>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default LargeStory
