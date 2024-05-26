import React from 'react'

function OnlyText({ txt }) {
    return (
        <div className=' mx-5'>
            <div className=' sm:max-w-[100%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%]  justify-stretch  w-full mx-auto font-serif leading-12 text-xl text-center space-y-3'>
                {txt}
            </div>
        </div>
    )
}

export default OnlyText
