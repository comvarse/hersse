import { useGlobal } from '@/context/GlobalContext'
import React from 'react'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa'
import { IoIosCart } from 'react-icons/io'
import { IoSettingsOutline } from "react-icons/io5";
import { PiProjectorScreenDuotone } from "react-icons/pi";
import { FaServicestack } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { ArrowRightIcon } from '@heroicons/react/outline';
import Logo from './Logo';
import Router from 'next/router';


function MobileMenu() {
    const global = useGlobal()

    const toggler = global.toggler;
    const setToggler = global.setToggler;
    const mobileMenu = global.mobileMenu;

    const navigate = (e, link) => {
        e.preventDefault();

        setTimeout(function () {
            setToggler(!toggler)
        }, 100)

        setTimeout(function () {
            //window.location.assign(link);
            Router.push(link);
        }, 200)
    }

    return (
        <div>
            <div className={`bg-[url("https://ats.net/wp-content/uploads/Fokus-AI-Phonlamai-Shutterstock.jpg")] bg-no-repeat bg-cover bg-center mt-[0px] md:mt-[0px] overflow-y-auto  duration-300 flex flex-col w-[390px] sm:w-[390px] h-screen fixed text-white top-[0px] ${toggler ? `left-[0]` : `left-[-100%]`} blur:hidden`}>

                <div className=' bg-black/85 h-screen pt-[0px]'>
                    <div className='pl-5 border-b-white/25 pb-3 pt-1 border-b-[1px] mb-10'>
                        <Logo />
                    </div>
                    <div className=' '>
                        {
                            mobileMenu.map(item => (
                                <Link key={item.link} onClick={(e) => navigate(e, item.link)} href={`#`} className='hover:text-gray-400 pl-10 pr-5 py-3 flex hover:bg-gray-700/60 text-gray-200 border-b border-blue-500/35'>
                                    {/* <span className='text-[15px] '>
                                    {
                                        item.title == 'Home' && (
                                            <FaHome />
                                        )
                                    }
                                    {
                                        item.title == 'About' && (
                                            <IoIosCart />
                                        )
                                    }
                                    {
                                        item.title == 'Services' && (
                                            <IoSettingsOutline />
                                        )
                                    }
                                    {
                                        item.title == 'Blockchain & Crypto' && (
                                            <PiProjectorScreenDuotone />
                                        )
                                    }
                                    {
                                        item.title == 'Machine Learning' && (
                                            <FaServicestack />
                                        )
                                    }
                                    {
                                        item.title == 'Contact' && (
                                            <IoIosCart />
                                        )
                                    }

                                </span> */}
                                    <span className='font-bold text-[14px]'>{item.title} </span>
                                </Link>
                            ))
                        }
                    </div>


                    <div className='relative flex gap-5 items-center mt-28'>
                        <div className='bg-cyan-600 w-[5px] h-[1.5px] '></div>
                        <Link href="https://www.facebook.com/comvarse" target='_blank'><span><BsFacebook size={22} className=' text-white-600 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                        <Link href="https://www.twitter.com/comvarse" target='_blank'><span><BsTwitterX size={22} className=' text-white-400 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                        <Link href="https://www.instagram.com/comvarse" target='_blank'><span><BsInstagram size={22} className=' text-white-600 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                        <Link href="https://www.pinterest.com/comvarse" target='_blank'><span><BsPinterest size={22} className=' text-white-600 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu
