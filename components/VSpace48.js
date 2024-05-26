import React, { useEffect, useState } from 'react'

function VSpace48({ height }) {
    let heightSpace = ""
    const [iHeight, setiHeight] = useState(100)

    function assignHeight() {
        setiHeight(height)

    }
    useEffect(() => {
        assignHeight();
    })


    return (

        <div>
            <div className=' h-[48px]'></div>
        </div>
    )
}

export default VSpace48
