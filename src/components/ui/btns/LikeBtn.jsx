import { createContext, useContext, useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import  { wishListContext } from "../../wishlistProvider";


export const likedProductProvider = createContext()

const LikeBtn = ({ id }) => {

    const { wishlistItems } = useContext(wishListContext);

    const isLiked = wishlistItems?.some(item => item.id === id);



    useEffect(() => {

    }, [])

    return (
        <>
            <div id={id} className="bg-white p-1 rounded-full" onClick={() => {
            }}>
                {isLiked && <FcLike />} {!isLiked && <IoIosHeartEmpty />}
            </div>
        </>
    );
}

export default LikeBtn;