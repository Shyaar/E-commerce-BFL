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
const Home = () => {


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

                    <div className="mx-6 lg:mx-24 md:flex overflow-x-auto overflow-hidden w-full">
                        <TodaysProducts />
                    </div>

                    <div className="w-full flex justify-center my-8 lg:my-16">
                        <PrimaryBtn text="View All Products" color="#DB4444" />
                    </div>

                    <hr className="my-6" />
                </div>


                <div id="bestSelling" className="my-16">
                    <SectionHeading heading="Categories" text="Browse By Category" hasTimer={false} />
                    <div className="mx-6 md:mx-12 lg:mx-24 flex overflow-x-auto overflow-hidden">
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

                <div id="product advert">
                    <div className="bg-black w-full border border-red-700 my-9 px-4 py-4 md:py-16 mx-4 md:mx-[45px]">
                        <div id="trending" className="flex flex-col md:flex-row items-center gap-10 justify-between mx-4 ">
                            <div id="left" className="pt-4 md:pt-14 pl-4 md:pl-16">
                                <div id="top" className="flex gap-4 items-center w-full">
                                    <p className="text-[#00FF66] text-center md:text-left w-full">Categories</p>
                                </div>
                                <div id="middle" className="flex gap-4 items-center">
                                    <p className="text-white text-[32px] md:text-[48px] w-full md:w-[380px] my-5 text-center md:text-left">
                                        Enhance Your Music Experience
                                    </p>
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="grid grid-cols-2 justify-center w-fit items-center md:flex gap-8 my-5 lg:justify-start">
                                        <div className="w-[60px] h-[60px] bg-white rounded-full"></div>
                                        <div className="w-[60px] h-[60px] bg-white rounded-full"></div>
                                        <div className="w-[60px] h-[60px] bg-white rounded-full"></div>
                                        <div className="w-[60px] h-[60px] bg-white rounded-full"></div>
                                    </div>
                                </div>
                                <div id="bottom" className="md:flex gap-2 items-center hidden">
                                    <PrimaryBtn text="Buy Now" color="#00FF66" />
                                </div>
                            </div>

                            <div id="right" className="grid items-center justify-center md:flex" >
                                <div className="relative mr-4 mt-8 md:mt-0 md:mr-12 grid border w-[400px] md:w-[400px]">
                                    <div className="w-[400px]  h-[400px] bg-white/10 rounded-full absolute -top-10 blur-3xl left-6"></div>
                                    <img src={Jbl} alt="" className="w-full object-fit" />
                                </div>
                                <div id="bottom" className="md:hidden gap-2 justify-center grid items-center my-4">
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

                    <div id="Advert" className="grid grid-cols-2 gap-4 mx-24 my-8 h-[400px]">
                        <div id="left" >
                            <div className="bg-black h-full rounded">
                                <div className="relative h-full ">
                                    <div className="absolute inset-0 mt-20 mx-4">
                                        <img src={p5} alt="" className=" w-full h-full object-fit z-0" />
                                    </div>

                                    <div id="text" className="absolute inset-0 text-white flex flex-col justify-end p-10 z-10 w-[350px] gap-4" >
                                        <div className="flex flex-col gap-3">
                                            <p className="font-bold text-[24px]">PlayStation 5</p>
                                            <p className="">Black and White version of the PS5 coming out on sale.</p>
                                        </div>
                                        <TextBtn text="Shop Now" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div id="right" className="flex flex-col h-full gap-4 w-full">

                            <div id="top" className="bg-[#0D0D0D] flex h-full rounded relative">
                                <div id="text" className="text-white flex flex-col justify-end p-10 z-10 w-[350px] gap-4" >
                                    <div className="flex flex-col gap-3">
                                        <p className="font-bold text-[24px]">Women’s Collections</p>
                                        <p className="">Featured woman collections that give you another vibe.</p>
                                    </div>
                                    <TextBtn text="Shop Now" />
                                </div>
                                <div id="img" className="absolute right-0 z-0 w-80 ">
                                    <img src={hatWoman} alt="" />
                                </div>
                            </div>

                            <div id="bottom" className="  grid grid-cols-2 gap-4 h-full">

                                <div id="text" className="relative text-white bg-black/85 rounded flex flex-col justify-end  z-10 w-full">
                                    <div className="absolute opacity-80 inset-0 px-10 py-4">
                                        <img src={Speakers} alt="" className=" w-full h-full object-fit z-0" />
                                    </div >
                                    <div className="flex flex-col gap-1 z-10 w-full p-3">
                                        <div >
                                            <p className="font-bold text-[24px]">Speakers</p>
                                            <p className="text-nowrap text-[14px]">Amazon wireless speakers</p>
                                        </div>
                                        <TextBtn text="Shop Now" />
                                    </div>
                                </div>


                                <div id="text" className="text-white relative bg-black/85 rounded flex flex-col justify-end  z-10 w-full gap-2" >
                                    <div className="absolute opacity-80 inset-0 px-10 py-4">
                                        <img src={Peff} alt="" className=" w-full h-full object-fit z-0" />
                                    </div >
                                    <div className="flex flex-col gap-1 z-10 w-full p-3">
                                        <div >
                                            <p className="font-bold text-[24px]">Perfume</p>
                                            <p className="text-nowrap text-[14px]">GUCCI INTENSE OUD EDP</p>
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