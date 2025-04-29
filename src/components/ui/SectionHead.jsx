import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Countdown, { timeLeftP } from "./Timer";
import PrimaryBtn from "./btns/PrimaryBtn";
import { useContext } from "react";

const SectionHeading = ({ heading, hasTimer, hasButton, text, hasArrow }) => {

    const countdown = useContext(timeLeftP)

    return (
        <>
            <div className="mx-4 lg:mx-24 mb-8 flex flex-col gap-6">
                <div id="top" className="flex items-center gap-2 text-[14px] lg:text-[16px]">
                    <div className="bg-[#DB4444] w-[15px] h-[30px] lg:w-[20px] lg:h-[40px]"></div>
                    <p className="text-[#DB4444]">{heading}</p>
                </div>
                <div id="bottom" className="flex flex-col lg:flex-row items-end justify-between">
                    <div className="flex flex-col md:flex-row w-full items-end gap-12 lg:gap-24">
                        <p className="text-[24px] lg:text-[36px] font-bold w-full">{text}</p>
                        <div className="">{hasTimer && (
                            <div className="flex items-center gap-4">

                                <div className="text-center">
                                    <div className="text-xs text-black mt-1">{countdown[0].label}</div>
                                    <div className="text-xl font-bold text-black px-3 py-1 rounded-md">
                                        {String(countdown[0].value).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xs text-black mt-1">{countdown[1].label}</div>
                                    <div className="text-xl font-bold text-black px-3 py-1 rounded-md">
                                        {String(countdown[1].value).padStart(2, '0')}
                                    </div>
                                </div><div className="text-center">
                                    <div className="text-xs text-black mt-1">{countdown[2].label}</div>
                                    <div className="text-xl font-bold text-black px-3 py-1 rounded-md">
                                        {String(countdown[2].value).padStart(2, '0')}
                                    </div>
                                </div><div className="text-center">
                                    <div className="text-xs text-black mt-1">{countdown[3].label}</div>
                                    <div className="text-xl font-bold text-black px-3 py-1 rounded-md">
                                        {String(countdown[3].value).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>

                    <div className="text-nowrap border mt-4 lg:mt-0">
                        {hasArrow ? (
                            <div className="flex gap-2">
                                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                    <FaArrowRightLong />
                                </button>
                                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                    <FaArrowLeftLong />
                                </button>
                            </div>
                        ) : !hasArrow && hasButton && (
                            <PrimaryBtn text="View All Products" />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionHeading;
