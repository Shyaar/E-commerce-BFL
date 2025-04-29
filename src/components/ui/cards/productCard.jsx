import { useContext, useEffect, useState } from "react";
import AddBtn from "../btns/AddToCart";
import LikeBtn from "../btns/LikeBtn";
import HideBtn from "../btns/HideBtn";
import { Hand } from "lucide-react";
import { ProductsData } from "../../data/Products";
import { wishhListContext } from "../../../pages/wishlistProvider";

const ProductCard = ({ image, title, price, id, like }) => {
    const [addVisible, setAddVisible] = useState(false);

    const [clickedId, setClickedId] = useState(null)

    const { data1, data2 } = useContext(ProductsData)
    const allProducts = [...data1, ...data2]





    const { wishlistItems, setWishListItems } = useContext(wishhListContext)

    const [likedItem, setLikedItem] = useState(null)

    function handleAdd() {
        console.log(id)
        setLikedItem(id)
        console.log(likedItem)
    }

    const found = likedItem? allProducts.find(data=>data.id === likedItem.id) : ""

    useEffect(() => {
        console.log(`found:${found}`)
        console.log(allProducts)
        console.log(likedItem)
    }, [likedItem,found])








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
                            <LikeBtn id={id ? id : ""} />
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
