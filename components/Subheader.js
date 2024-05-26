import React from 'react'

function Subheader({ title }) {
    return (
        <div>
            <div className="flex items-center gap-2">
                <hr className="flex-grow border-t-[1px] border-gray-900/25" />
                <span className="text-4xl font-black text-center">{title}</span>
                <hr className="flex-grow border-t-[1px] border-gray-900/25" />
            </div>
        </div >
    )
}

export default Subheader
