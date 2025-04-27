import TextBtn from "./btns/TextBtn";
import Heroimg from "../../assets/pngs/hero_endframe__cvklg0xk3w6e_large 2.png";

const Hero = () => {
    return (
        <>
            <div className="bg-black w-full px-4 sm:px-6 md:px-12 ">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto">
                    <div className="pt-8 md:pt-14 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex gap-3 items-center">
                            <img 
                                src="src/assets/pngs/1200px-Apple_gray_logo 1.png" 
                                alt="Apple Logo" 
                                className="w-6 md:w-8"
                            />
                            <p className="text-white text-sm md:text-base">iPhone 14 Series</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-xs md:max-w-sm">
                                Up to 10% off Voucher
                            </p>
                        </div>
                        <div className="mt-6">
                            <TextBtn text="Shop Now" />
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0 flex justify-center">
                        <img 
                            src={Heroimg} 
                            alt="Hero iPhone Image" 
                            className="w-[400px] md:w-[380px] lg:w-[480px] xl:w-[520px] object-contain"
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-[#DB4444] border border-white rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
            </div>
        </>
    );
}

export default Hero;
