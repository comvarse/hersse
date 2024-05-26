import React from 'react'
import Link from 'next/link'

const Logo2 = () => {
    return (
        <div>
            <div className='flex'>
                <Link href={"/"}>
                    <span className=' text-[28px] font-sans font-black text-black tracking-tighter capitalize '>Gerters</span>
                </Link>
            </div>
        </div>
    )
}

export default Logo2
