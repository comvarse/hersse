import React from 'react'

function Updates() {
    const clientResJson = [
        {
            title: "Client Results",
            img: `bg-[url("/img/aipic.jpg")]`,
            categorytext: "Data Analytics & Machine Learnings",
            category: "Products",
            subtitle: "Your Organization for Sustainable AI technologies",
            description: "Organizations need to adapt to current trends in AI powered technologies. Forward looking organizations' concerns is not to be left behind. Hence, businesses must adapt their product offerings to meet with current demands."
        },
        {
            title: "Client Results",
            img: `bg-[url("/img/web4.jpg")]`,
            categorytext: "Adaptable AI & Web Applications",
            category: "Products",
            subtitle: "Grow Sales and Transform Customer Experience",
            description: "Organizations seeking to maximize the rewards of online engagement with potential customers will need transformative technologies to better engage website visitors and web based operations. The future web factory will allow customers to create and manufacture. We can help by customizing cutting edge web components to suit your business demands to strategically engage customers online."
        },
    ]
    return (
        <div>
            <div className='mx-5'>
                <div className=' max-w-[1300px] mx-auto w-full'>
                    <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2'>
                        {
                            clientResJson.map((item) => {
                                return <div key={item.img} className=' sm:col-span-1 mb-[30px]'>
                                    <div className={`${item.img} h-[360px] bg-center`}></div>
                                    <div className=' text-[14px] text-red-500 mt-3 font-semibold'>{item.categorytext}</div>
                                    <div className=' mt-[5px] text-[36px] leading-10 font-bold text-gray-900'>{item.subtitle} </div>
                                    {/* <div className=' mt-[12px] leading-[22px] text-normal font-serif text-[17px] text-gray-500'>{item.description}</div> */}
                                </div>
                            })
                        }

                        {/* <div className=' col-span-6'>
                        <div className=' bg-[url("https://www.bain.com/contentassets/76f4339c8cb44ce8a3d27658cd2ec0f2/v1-fof-ai_16-9.png?width=1440&height=810&mode=crop")] h-[360px] bg-center'></div>
                        <div className=' text-[14px] text-red-500 mt-3 font-semibold'>Adaptable Web Applications</div>
                        <div className=' mt-[5px] text-[18px] font-semibold text-gray-900'>Web4.0 and the Future Factory: How Web 4.0 and AI Can Grow Sales and Transform Customer Experience  </div>
                        <div className=' mt-[12px] leading-[22px] text-normal font-serif text-[15px] text-gray-500'>Organizations seeking to maximize the rewards of online engagement with potential customers will need transformative technologies to better engage website visitors and web based operations. The future web factory will allow customers to create and manufacture. We can help by customizing cutting edge web components to suit your business demands to strategically engage customers online.</div>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updates
