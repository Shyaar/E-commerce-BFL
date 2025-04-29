import { createContext, useContext, useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { WishListProducts } from "../../../pages/WishList";
import { ProductsData } from "../../data/Products";
import WishlistProvider from "../../../pages/wishlistProvider";


export const likedProductProvider = createContext()

const LikeBtn = ({ id }) => {


    const { data1, data2 } = useContext(ProductsData)
    const allProducts = (data1 && data2 ? [...data1, ...data2] : [])

    const [collectedId, setCollectedId] = useState(null)


    const [likeIsActive, setLikeIsActive] = useState(false)

    useEffect(()=>{

    },[])


    // const { wishlistItems, setWishListItems } = useContext(WishListProducts)







    return (
        <>
            <div className="bg-white p-1 rounded-full" onClick={() => { setLikeIsActive(prev => !prev)
            setCollectedId(id? id:"")
            console.log(id)
            }}>
                {likeIsActive && <FcLike />} {!likeIsActive && <IoIosHeartEmpty />}
            </div>
        </>
    );
}

export default LikeBtn;