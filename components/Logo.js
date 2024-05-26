import React from 'react'
import Link from 'next/link'

const Logo = () => {
    return (
        <div>
            <div className='flex'>
                <Link href={"/"}>
                    <span className=' text-[25px] italic font-sans font-black text-white tracking-tighter capitalize '>
                        Hersse
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Logo
