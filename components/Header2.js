import { React, useState, useEffect } from 'react'
import Logo from './Logo'
import MiddleMenu2 from './MiddleMenu2'
import { useRouter } from 'next/router'
import { MenuIcon } from '@heroicons/react/outline'
import MenuHandle from './MenuHandle'
import Logo2 from './Logo2'

const Header2 = () => {
    const router = useRouter()
    const [navbg, setNavbg] = useState(false);
    const TOP_OFFSET = 100;
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY >= TOP_OFFSET) {
                setNavbg(true)
            } else {
                setNavbg(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return (
        <header className={`fixed w-full top-0 z-10 px-4  py-2 shadow-lg transition duration-1000   ${navbg ? "bg-gray-800" : "bg-transparent"} border-b border-b-gray-100/10`}>
            <div className='max-w-[1300px] w-full mx-auto'>
                <header className=' flex items-center justify-between'>
                    <div className='relative top-[-3px]'><Logo2 /></div>
                    <div><MiddleMenu2 router={router} /></div>
                    <div className='hover:text-black/30 hover:cursor-pointer flex items-center text-black space-x-2 border-1 border-gray-300 rounded-full py-2'>
                        <MenuHandle />
                    </div>
                </header>
            </div>
        </header>
    )
}

export default Header2
