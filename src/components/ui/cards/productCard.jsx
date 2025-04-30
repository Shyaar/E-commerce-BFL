import { useContext, useEffect, useState } from "react";
import AddBtn from "../btns/AddToCart";
import LikeBtn from "../btns/LikeBtn";
import HideBtn from "../btns/HideBtn";
import { Hand } from "lucide-react";
import { ProductsData } from "../../data/Products";
import { wishListContext } from "../../wishlistProvider";

const ProductCard = ({ image, title, price, id, active}) => {

    const [addVisible, setAddVisible] = useState(false);

    const [clickedId, setClickedId] = useState(null)

    const { data1, data2 } = useContext(ProductsData)
    const allProducts = [...data1, ...data2]





    const { wishlistItems, setWishListItems } = useContext(wishListContext)


    function handleAdd() {
        console.log(id)
        const likedItem = allProducts.find(data => data.id === id)
        // console.log(likedItem)
        const exists = wishlistItems.find(item=>item.id === likedItem.id)
        console.log(active)

        exists? setWishListItems(wishlistItems.filter(item=>item.id != exists.id)) :setWishListItems(prev => [...prev, likedItem])
    }


    useEffect(() => {
        // console.log(likedItem)
        // console.log(wishlistItems)
    }, [wishlistItems])








    return (
        <>
            <div id="Desktop"
                className="relative mb-8 hidden lg:block"
                onMouseEnter={() => { setAddVisible(true) }}
                onMouseLeave={() => { setAddVisible(false) }}
            >
                <div
                    id="DesktopTop"
                    className="bg-[#F5F5F5] w-full md:w-[300px] lg:w-[320px] h-[250px] rounded-[4px] relative overflow-hidden mb-4"
                >
                    <div className="m-2">
                        <p className="px-2 py-1 rounded-[4px] bg-[#DB4444] text-white w-[55px] top-2">-40%</p>
                    </div>
                    <div
                        id="img"
                        className="w-full flex justify-center"
                        onMouseEnter={() => { setAddVisible(true) }}
                        onMouseLeave={() => { setAddVisible(false) }}
                    >
                        <img src={image} alt="" className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[250px] object-contain" />
                    </div>

                    <div className="flex flex-col gap-2 absolute top-2 right-2 ">


                        <LikeBtn id={id} />

                        <HideBtn />
                    </div>


                    {addVisible && (
                        <div
                            className="absolute bottom-0 w-full"
                            onMouseEnter={() => { setAddVisible(true) }}
                            onMouseLeave={() => { setAddVisible(false) }}
                        >
                            <div className="w-full">
                                <AddBtn />
                            </div>
                        </div>
                    )}
                </div>

                <div id="DesktopBottom">
                    <p className="text-nowrap truncate w-[250px]">{title}</p>
                    <p className="text-[#DB4444]">{price}</p>
                    <div className="flex gap-3">
                        <span>Stars</span> <p className="text-black/50">(88)</p>
                    </div>
                </div>
            </div>

            <div id="Mobile"
                className="relative mb-8 lg:hidden">
                <div
                    id="MobileTop"
                    className="bg-[#F5F5F5] w-full md:w-[300px] lg:w-[320px] h-[250px] rounded-[4px] relative overflow-hidden mb-4"
                >
                    <div className="m-2">
                        <p className="px-2 py-1 rounded-[4px] bg-[#DB4444] text-white w-[55px] top-2">-40%</p>
                    </div>
                    <div
                        id="img"
                        className="w-full flex justify-center"
                        onMouseEnter={() => { setAddVisible(true) }}
                        onMouseLeave={() => { setAddVisible(false) }}
                    >
                        <img src={image} alt="" className="w-[200px] sm:w-[220px] md:w-[240px] lg:w-[250px] object-contain" />
                    </div>

                    <div className="flex flex-col gap-2 absolute top-2 right-2">

                        <div onClick={() => handleAdd()}>
                            <LikeBtn id={id ? id : ""} active={active? active:""}/>
                        </div>

                        <HideBtn />
                    </div>
                    {(
                        <div
                            className="absolute bottom-0 w-full"                        >
                            <div className="w-full">
                                <AddBtn />
                            </div>
                        </div>
                    )}
                </div>

                <div id="MobileBottom">
                    <p className="text-nowrap truncate w-[250px]">{title}</p>
                    <p className="text-[#DB4444]">{price}</p>
                    <div className="flex gap-3">
                        <span>Stars</span> <p className="text-black/50">(88)</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCard;
