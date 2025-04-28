import { IoChevronDown } from "react-icons/io5";

const Adds = () => {
    return (
        <div className="bg-black text-white text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24 py-3 text-center md:text-left gap-2 ">
            <div className="w-full">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <span className="font-bold">ShopNow</span>
                </p>
            </div>
            <div className="flex items-center gap-1">
                <p>English</p>
                <IoChevronDown />
            </div>
        </div>
    );
};

export default Adds;
