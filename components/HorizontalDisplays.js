import React from 'react'
import Image from 'next/image'


function HorizontalDisplays() {
    const landscapesJson = [
        {
            id: 1,
            title: "Strategy",
            description: "We offer strategic insight that is tailored to your unique business context. We first understand your industry, market dynamics, and competitive landscape, and then craft future-proof solutions to suit your needs.",
            linkText: "Technical Assessment",
            link: "http://amazon.com",
            img: "/img/strat.webp"
        },
        {
            id: 2,
            title: "Operations",
            description: "From operations and marketing to finance and technology, Our strategic approach takes into account the interconnectedness of these areas, ensuring that we deliver solutions that are aligned with your goals",
            linkText: "Holy Grail of Buds",
            link: "http://amazon.com",
            img: "/img/opsmgt.jpg"
        },
        {
            id: 3,
            title: "Customer Value",
            description: "With goals in place, we develop a detailed implementation plan, outlining project initiatives and actions required to achieve them. We work collaboratively with your team to implement the plan to address your project requirements every step of the way.",
            linkText: "Food lovers day",
            link: "http://amazon.com",
            img: "/img/visacard.webp"

        },
        {
            id: 4,
            title: "Transformation",
            description: "Transformation is the goal of every IT project. We therefore monitor delivered solutions' performance against key metrics and milestones. We track progress to identify areas for improvement, and make adjustments as needed to ensure that strategy remains on track",
            linkText: "Blockchain Events",
            link: "http://amazon.com",
            img: "/img/exec.webp"
        },
    ]
    return (
        <div className=' px-5'>
            <div className='max-w-[1300px] w-full mx-auto'>
                <div className='grid gap-20 w-full lg:max-w-[1500px] mx-auto   sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 '>
                    {
                        landscapesJson.map(item => (
                            <div key={item.id} className=' relative hover:opacity-75 cursor-default'>
                                {/* <img src={item.img} alt="" /> */}
                                <div className='relative w-full h-[180px] overflow-hidden rounded-sm'>
                                    <Image
                                        src={item.img}
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='left'
                                        alt={item.title}
                                    />
                                </div>
                                <div className='text-2xl mt-2 font-black'>
                                    {item.title}
                                </div>
                                <div className='text-[15px] mt-2'>
                                    {item.description}
                                </div>
                                {/* <div className='text-md mt-3 underline cursor-pointer'>
                                <a href={item.link}>{item.linkText}</a>
                            </div> */}

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HorizontalDisplays
