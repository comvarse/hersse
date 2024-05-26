import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { useGlobal } from '@/context/GlobalContext';
import MobileMenu from './MobileMenu.js'

function MenuHandle() {
    const { toggler, setToggler } = useGlobal();

    const toggleMenu = (e) => {
        e.preventDefault()
        setToggler(!toggler)
    }
    return (
        <div>
            <MenuIcon className='h-6 w-7' onClick={(e) => toggleMenu(e)} />
            <MobileMenu />
        </div>

    )
}

export default MenuHandle
