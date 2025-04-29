import React from 'react'

const SecondaryBtn = ({color,text}) => {
    return (
        <>
            <button style={color ? { backgroundColor: color } : { backgroundColor: "" }} className="py-3 px-12 border border-black/50 text-black rounded-[4px] font-medium w-fit">{text}</button>
        </>
    )
}

export default SecondaryBtn