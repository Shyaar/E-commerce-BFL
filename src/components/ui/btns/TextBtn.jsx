import { IoIosArrowRoundForward } from "react-icons/io";
import React from 'react'

const TextBtn = ({text}) => {
    return (
        <>
            <div id="bottom" className="flex gap-2 items-center z-10">
                <p className="text-white border-b">{text} </p>
                <IoIosArrowRoundForward className="text-white" />
            </div>
        </>
    )
}

export default TextBtn