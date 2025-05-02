import { useContext, useEffect } from "react";
import { cartContext } from "../../CartProvider";
import { ProductsData } from "../../data/Products";

const AddBtn = ({ id }) => {
    const { data1, data2 } = useContext(ProductsData)
    const allProducts = [...data1, ...data2]

    const { cartItems, setCartItems } = useContext(cartContext)

    function handleAdd() {
        const found = allProducts.find(product => product.id === id)
        setCartItems(prev => [...prev, {...found, numToBuy:1}])
    }

    useEffect(() => {

    }, [cartItems])








    return (
        <>
            <div onClick={() => handleAdd()} className="bg-black text-white flex justify-center items-center py-1 w-full">
                Add To Cart
            </div>
        </>
    );
}

export default AddBtn;