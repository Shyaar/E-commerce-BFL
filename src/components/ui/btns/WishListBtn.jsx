import React from 'react'
import { useState } from 'react'
import { IoIosHeartEmpty } from "react-icons/io";


const WishListBtn = () => {
    const [likeCount, setLikeCount] = useState(0)

    return (
        <>
            <div className='relative'>
                {likeCount ? (
                    <>
                        <p className='flex items-center justify-center w-fit py-[3px] px-2 rounded-full text-white bg-[#DB4444] text-[12px] absolute left-4 -top-2'>{likeCount}</p>
                        <IoIosHeartEmpty className='text-[30px] p-1 ' />

                    </>
                ) : <IoIosHeartEmpty className='text-[30px] p-1 ' />}
            </div>
        </>
    )
}

export default WishListBtn