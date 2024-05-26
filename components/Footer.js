import React from 'react'
import Logo from './Logo'
import { BsFacebook, BsInstagram, BsPinterest, BsTwitterX } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
    const ftrLnk = [
        {
            title: "Contact us",
            lnk: "/contact"
        },
        {
            title: "Sustainability",
            lnk: "/sustainability"
        },
        {
            title: "Accessibility",
            lnk: "/accessibility"
        },
        {
            title: "Terms of use",
            lnk: "/tos"
        },
        {
            title: "Privacy",
            lnk: "/privacy"
        },
    ]

    const iconsList = [
        { icon: <BsFacebook />, url: "http://facebook.com/gertersinc" },
        { icon: <BsTwitterX />, url: "http://twitter.com/gertersinc" },
        { icon: <BsInstagram />, url: "https://instagram.com/gertersinc" },
        { icon: <BsPinterest />, url: "http://pinteres.com/gertersinc" }
    ]
    return (
        <div>
            <div className='bg-black px-5 text-white h-auto py-20'>
                <div className=' max-w-[1300px] w-full mx-auto  '>
                    <div className=' grid grid-cols-1 gap-4 md:grid-cols-2'>
                        <div className=''>
                            <Logo />
                        </div>
                        <div className=''>
                            <div className='flex text-[20px] space-x-8 mt-5 md:mt-[-6px] md:float-right relative bottom-[-13px]'>
                                {
                                    iconsList.map((item) => {
                                        return (
                                            <Link key={item.url} href={item.url}>
                                                {item.icon}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>



                    <div className=' hidden md:flex space-x-5 mt-[30px] text-[15px] text-white/80'>
                        {
                            ftrLnk.map((item) => {
                                return (
                                    <div key={item.lnk} className=' bg-gray-200/15'>
                                        <Link href={item.lnk} className='hover:text-white/50'>
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className=' md:hidden grid grid-cols-1 space-y-3 mb-[30px] mt-[60px] text-[15px] text-white/80'>
                        {
                            ftrLnk.map((item) => {
                                return (
                                    <div key={item.lnk} className=' '>
                                        <Link href={item.lnk} className='hover:text-white/50'>
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>



                    <div className=' text-white/50 text-[13px] mt-2 border-b-[1px] border-white/40  pb-2'>
                        © 2024 Gerters, Inc.
                    </div>

                    <div className=' text-[12px] mt-2 text-white/60 grid grid-cols-1 md:grid-cols-12'>
                        <div className=' col-span-7'>
                            This is the version of our website addressed to speakers of English in the United States. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more
                        </div>
                        <div className=' col-span-5'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
