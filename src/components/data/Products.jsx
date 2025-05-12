import { createContext, useContext, useEffect, useState } from "react";
import TodaysProducts from "../ui/TodaysProducts";
import ProductCard from "../ui/cards/productCard";
// import BestSelling from "./BestSelling";


export const ProductsData = createContext(null)

const ProductsProvider = ({ children }) => {

    const [data1, setData1] = useState(null)
    const [data2, setData2] = useState(null)




    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products')
                const res2 = await fetch('https://fakestoreapi.com/products')
                // const res2 = await fetch('https://api.escuelajs.co/api/v1/products')

                const collected1 = await res.json()
                const collected2 = await res2.json()

                    setData1(collected1?collected1:[])
                    setData2(collected2?collected2:[])


                // console.log(data1)
                // console.log(data2)

            } catch (error) {
                console.error("Something went wrong:", error);
            }
        }
        getData()

    }, [data1,data2])

    return (
        <>
        
            <ProductsData.Provider value={{ data1, data2 }}>
                {children}
            </ProductsData.Provider>

        </>
    );
}

export default ProductsProvider;