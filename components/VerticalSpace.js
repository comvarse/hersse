import React, { useEffect, useState } from 'react'

function VerticalSpace({ height }) {
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
            <div className=' h-[24px]'></div>
        </div>
    )
}

export default VerticalSpace
