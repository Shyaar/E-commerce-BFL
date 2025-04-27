import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";

const LikeBtn = () => {

    const [likeIsActive,setLikeIsActive] = useState(false)

    return (
        <>
            <div className="bg-white p-1 rounded-full" onClick={()=>{setLikeIsActive(prev => !prev)}}>
                {likeIsActive && <FcLike />} {!likeIsActive && <IoIosHeartEmpty />}
            </div>
        </>
    );
}

export default LikeBtn;