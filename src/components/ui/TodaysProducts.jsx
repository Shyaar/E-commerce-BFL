import { useContext } from "react";
import Products, { ProductsData } from "../data/Products";
import ProductCard from "./cards/productCard";

const TodaysProducts = () => {
    const { data1 } = useContext(ProductsData);

    return (
        <>
            <div className="grid gap-6 md:flex lg:flex overflow-x-auto">
                {data1 && data1.slice(0, 5).map((data) => (
                    <ProductCard key={data.id} image={data.image} title={data.name} price={data.price} />
                ))}
            </div>
        </>
    );
}

export default TodaysProducts;
