import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function OraStory() {

    const orajson = [
        {
            id: 1,
            title: "Maximizing Efficiency: The Power and Impact of Digital Outsourcing. ",
            lnk: "",
            description: "By outsourcing non-core IT functions to service providers, companies focus on core objectives and leverage the scalability & flexibility it brings.",
            img: "/img/bitcoingold.webp"
        },
        {
            id: 2,
            title: "Empowering Your Business with AI: Expert Consulting for Sustainable Growth",
            lnk: "",
            description: "AI has the potential to revolutionize every aspect of your business, from enhancing customer experiences to optimizing operations.",
            img: "/img/ai.jpg"
        },
        {
            id: 3,
            title: "Digital Architect: Elevate Your Online Presence with Expert Web Development Offering",
            lnk: "",
            description: "We specialize in crafting bespoke web solutions tailored to your unique needs. We offer Tailored and Transparent Solutions.",
            img: "/img/wdp.jpg"
        },
    ]
    return (
        <div id='orastory' className=' bg-slate-200  bg-[url("/img/iptn.avif")] bg-center bg-repeat bg-auto'>
            <div className=' bg-white/45  px-5 py-14'>
                <div className='max-w-[1300px] w-full mx-auto '>
                    <div className=' grid gap-8 grid-cols-1 lg:grid-cols-3 '>
                        {
                            orajson.map((item) => {
                                return (<div key={item.id} className=' bg-white border-b-4  border-b-slate-500 p-8 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
                                    <div className=''>
                                        <div className=' text-[25px] font-bold leading-[28px] lg:h-[85px] overflow-hidden'>
                                            {item.title}
                                        </div>
                                        <div className=' mt-[10px] text-[15px] lg:min-h-[80px] lg:max-h-[80px] overflow-hidden '>
                                            {item.description}
                                        </div>
                                    </div>
                                    <div className='relative w-full h-[80px] mt-[10px]'>
                                        <Image
                                            key={item.lnk}
                                            src={item.img}
                                            layout='fill'
                                            objectFit='cover'
                                            objectPosition='left'
                                            alt={item.title}
                                        />
                                    </div>
                                </div>)

                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OraStory
