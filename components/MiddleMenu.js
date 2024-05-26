import React, { useEffect } from 'react'
import { useGlobal } from '@/context/GlobalContext';
import Link from 'next/link';

function MiddleMenu({ router }) {
    const { horizontalNav, setHorizontalNav } = useGlobal();

    useEffect(() => {
        console.log(horizontalNav)
    }, horizontalNav)

    return (
        <div>
            <div className='flex space-x-2'>
                {
                    horizontalNav.map(function (item) {
                        let isActive = false;
                        if (router.asPath === item.link) {
                            isActive = true;
                        }

                        return <Link key={item.title} href={item.link}>
                            <div className={`${isActive ? " text-white font-bold bg-red-200/40" : "text-white/50"} relative rounded-full hover:bg-red-200/40 hover:text-white px-4 pt-[2px] pb-[5px]  cursor-pointer text-[14px]`}>
                                {item.title}
                            </div>
                        </Link>
                    })
                }
            </div>

        </div>
    )
}

export default MiddleMenu
