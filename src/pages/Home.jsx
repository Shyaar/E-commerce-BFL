import Hero from "../components/ui/Hero";
import RightNav from "../components/ui/RightNav";
import SectionHeading from "../components/ui/SectionHead";
import Products from "../components/data/Products";
import PrimaryBtn from "../components/ui/btns/PrimaryBtn";
import TodaysProducts from "../components/ui/TodaysProducts";
import BestSelling from "../components/data/BestSelling";
import CategoryCard from "../components/ui/cards/CategoryCard";
import Categories from "../components/ui/Categories";
import AllProducts from "../components/ui/AllProducts";
import TextBtn from "../components/ui/btns/TextBtn";
import p5 from '../assets/pngs/ps5-slim-goedkope-playstation_large 1.png'
import hatWoman from '../assets/pngs/attractive-woman-wearing-hat-posing-black-background 1.png'
import Speakers from '../assets/pngs/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png'
import Peff from '../assets/pngs/peff.png'
import ServicesCard from "../components/ui/cards/Services";
import DeliveyIcon from "../assets/icons/icon-delivery.png"
import CallCenter from "../assets/icons/Icon-Customer service.png"
import Security from "../assets/icons/Icon-secure.png"
import Jbl from "../assets/pngs/Frame 694.png"
import TeztCD from "../components/data/CountDown.";
import { useContext } from "react";
import { timeLeftP } from "../components/ui/Timer";

const Home = () => {
    const countdown = useContext(timeLeftP)


    return (
        <>
            <div>
                <div className="md:px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr,3fr] mt-48 md:mt-36 lg:mt-2 gap-8">
                    <div id="rightNav" className="hidden lg:flex flex-col gap-4 border-r py-10">
                        <RightNav text="Woman’s Fashion" hasIcon={true} />
                        <RightNav text="Men's Fashion" hasIcon={true} />
                        <RightNav text="Electronics" hasIcon={false} />
                        <RightNav text="Home & Lifestyle" hasIcon={false} />
                        <RightNav text="Medicine" hasIcon={false} />
                        <RightNav text="Sports & Outdoor" hasIcon={false} />
                        <RightNav text="Baby’s & Toys" hasIcon={false} />
                        <RightNav text="Groceries & Pets" hasIcon={false} />
                        <RightNav text="Health & Beauty" hasIcon={false} />
                    </div>

                    <div id="hero" className=" ">
                        <Hero />
                    </div>
                </div>


                <div id="today" className="my-6">
                    <SectionHeading heading="Today's" text="Flash Sales" hasTimer={true} />

                    <div className="mx-6 lg:mx-24 md:flex overflow-x-auto overflow-hidden">
                        <TodaysProducts />
                    </div>

                    <div className="w-full flex justify-center my-8 lg:my-16">
                        <PrimaryBtn text="View All Products" color="#DB4444" />
                    </div>

                    <hr className="my-6" />
                </div>


                <div id="bestSelling" className="my-16">
                    <SectionHeading heading="Categories" text="Browse By Category" hasTimer={false} />
                    <div className="mx-6 md:mx-12 lg:mx-24 flex items-center justify-center overflow-x-auto overflow-hidden">
                        <Categories />
                    </div>
                    <hr className="my-6" />
                </div>


                <div id="This month" className="my-16">
                    <SectionHeading heading="This Month" text="Best Selling Products" hasTimer={false} />
                    <div className="mx-6 md:mx-12 lg:mx-24 flex overflow-x-auto overflow-hidden">
                        <BestSelling />
                    </div>
                </div>

                <div id="product-advert">
                    <div className="bg-black mx-4 lg:mx-24 mb-8">


                        <div id="trending" className="grid md:grid-cols-2 items-center gap-10 justify-between mx-4">


                            <div id="left" className="pt-4 md:pt-14 pl-4 md:pl-16 text-center md:text-left">
                                <div id="top" className="flex gap-4 items-center w-full justify-center md:justify-start">
                                    <p className="text-[#00FF66] w-full">Categories</p>
                                </div>
                                <div id="middle" className="flex gap-4 items-center">
                                    <p className="text-white text-[20px] font-bold md:text-[32px] w-full my-5">
                                        Enhance Your Music Experience
                                    </p>
                                </div>
                                <div className="w-full md:w-fit flex items-center md:items-start md:justify-start justify-center">
                                    <div className="grid grid-cols-2 gap-8 lg:flex w-fit items-center justify-center lg:justify-start">
                                        <div className="w-[62px] h-[62px] p-3 grid items-center justify-center bg-white rounded-full">
                                            <p className="font-bold text-center text-[16px]">{countdown[0].value}</p>
                                            <p className="text-center text-[11px]">{countdown[0].label}</p>
                                        </div>

                                        <div className="w-[62px] h-[62px] p-3 grid items-center justify-center bg-white rounded-full">
                                            <p className="font-bold text-center text-[16px]">{countdown[1].value}</p>
                                            <p className="text-center text-[11px]">{countdown[1].label}</p>
                                        </div>

                                        <div className="w-[62px] h-[62px] p-3 grid items-center justify-center bg-white rounded-full">
                                            <p className="font-bold text-center text-[16px]">{countdown[2].value}</p>
                                            <p className="text-center text-[11px]">{countdown[2].label}</p>
                                        </div>

                                        <div className="w-[62px] h-[62px] p-3 grid items-center justify-center bg-white rounded-full">
                                            <p className="font-bold text-center text-[16px]">{countdown[3].value}</p>
                                            <p className="text-center text-[11px]">{countdown[3].label}</p>
                                        </div>


                                    </div>
                                </div>
                                <div id="bottom" className="md:flex gap-2 items-center hidden my-9">
                                    <PrimaryBtn text="Buy Now" color="#00FF66" />
                                </div>
                            </div>



                            <div id="right" className="grid items-center justify-center md:flex">

                                <div className="relative w-[200px] md:w-[400px] lg:w-[400px] mx-auto">

                                    <div className="w-full h-full bg-white/10 rounded-full absolute -top-15 md:-top-15 blur-3xl left-6"></div>
                                    <img src={Jbl} alt="Product" className="w-full h-full object-fit rounded-lg" />
                                </div>
                                <div id="bottom" className="md:hidden flex justify-center items-center gap-2 my-4">
                                    <PrimaryBtn text="Buy Now" color="#00FF66" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="allProducts" >
                    <SectionHeading heading="Our Products" text="Explore Our Products" />
                    <div className="mx-6 md:mx-12 lg:mx-24 flex overflow-x-auto overflow-hidden">
                        <AllProducts />
                    </div>

                    <div className="w-full flex justify-center my-16">
                        <PrimaryBtn text="View All Products" color="#DB4444" />
                    </div>
                </div>

                <div id="featured" className="hidden md:block">
                    <SectionHeading heading="Featured" text="New Arrival" />

                    <div id="Advert" className="grid grid-cols-2 gap-4 md:mx-4 lg:mx-24 my-8 h-[400px]">
                        <div id="left" >
                            <div className="bg-black h-full rounded">
                                <div className="relative h-full ">
                                    <div className="absolute inset-0 mt-20 md:w-[350px] lg:w-[400px]">
                                        <img src={p5} alt="" className=" w-full h-full object-fit z-9" />
                                    </div>

                                    <div id="text" className="absolute inset-0 text-white flex flex-col justify-end p-10 z-0 w-[350px] gap-4" >
                                        <div className="flex flex-col gap-3">
                                            <p className="font-bold md:text-[18px] text-[24px]">PlayStation 5</p>
                                            <p className="md:text-[14px] lg:text-[16px] md:w-[180px]">Black and White version of the PS5 coming out on sale.</p>
                                        </div>
                                        <TextBtn text="Shop Now" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="right" className="flex flex-col h-full gap-4 w-full">

                            <div id="top" className="bg-[#0D0D0D] flex h-full rounded relative">
                                <div id="text" className="text-white flex flex-col justify-end p-10 z-9 w-[350px] gap-4" >
                                    <div className="flex flex-col gap-3 z-10">
                                        <p className="font-bold md:text-[18px] text-[24px]">Women’s Collections</p>
                                        <p className="md:text-[14px] lg:text-[16px]">Featured woman collections that give you another vibe.</p>
                                    </div>
                                    <TextBtn text="Shop Now" />
                                </div>
                                <div id="img" className="absolute right-0 z-0 md:w-[304px] lg:w-[310px] ">
                                    <img src={hatWoman} alt="" />
                                </div>
                            </div>

                            <div id="bottom" className="  grid grid-cols-2 gap-4 h-full">

                                <div id="text" className="relative text-white bg-black/85 rounded flex flex-col items-center justify-end  z-8 w-full overflow-hidden">
                                    <div className=" absolute opacity-80 px-10 py-4 md:w-[190px] md:h-[150px]">

                                        <img src={Speakers} alt="" className=" w-full h-full inset-0 object-fit z-0" />
                                    </div >
                                    <div className="flex flex-col gap-1 z-0 w-full p-3">
                                        <div >
                                            <p className="font-bold md:text-[18px] text-[24px]">Speakers</p>
                                            <p className="md:text-[14px] lg:text-[16px]">Amazon wireless speakers</p>
                                        </div>
                                        <TextBtn text="Shop Now" />
                                    </div>
                                </div>

                                <div id="text" className="relative text-white bg-black/85 rounded flex flex-col items-center justify-end  z-8 w-full overflow-hidden">
                                    <div className=" absolute opacity-80 px-10 py-4 md:w-[190px] md:h-[150px]">

                                        <img src={Peff} alt="" className=" w-full h-full inset-0 object-fit z-0" />
                                    </div >
                                    <div className="flex flex-col gap-1 z-0 w-full p-3">
                                        <div >
                                            <p className="font-bold md:text-[18px] text-[24px]">Perfume</p>
                                            <p className="md:text-[14px] lg:text-[16px]">GUCCI INTENSE OUD EDP</p>
                                        </div>
                                        <TextBtn text="Shop Now" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div id="services" className="grid md:flex items-center justify-center my-20">
                    <ServicesCard icon={DeliveyIcon} text="FREE AND FAST DELIVERY" subText="Free delivery for all orders over $140" />
                    <ServicesCard icon={CallCenter} text="24/7 CUSTOMER SERVICE" subText="Friendly 24/7 customer support" />
                    <ServicesCard icon={Security} text="MONEY BACK GUARANTEE" subText="We reurn money within 30 days" />
                </div>
            </div>
        </>
    );
}

export default Home;