import React from 'react'
import sendIcon from "../assets/icons/icon-send.png"
import QrCode from "../assets/icons/QrCode.png"
import GooglePlay from "../assets/icons/GooglePlay.png"
import AppStore from "../assets/icons/AppStore.png"


const Footer = () => {
    return (
        <>

            <div className='bg-black text-white'>
                <div className='hidden lg:grid grid-cols-5 gap-6 px-20 py-9'>
                    <div className='grid gap-2 w-fit h-fit'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Exclusive</p>
                            <p className='font-bold text-[14px]'>Subscribe</p>
                        </div>
                        <div className='grid gap-6'>
                            <p className='text-[12px] text-nowrap'>Get 10% off your first order</p>
                            <div className='border-2 border-white rounded-[4px] flex w-fit p-2 gap-2'>
                                <input type="text" className='bg-transparent text-[14px] w-full' placeholder='Enter your email' />
                                <img src={sendIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='grid gap-2 w-fit h-fit'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Support</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[14px]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p className='text-[14px]'>exclusive@gmail.com</p>
                            <p className='text-[14px]'>+88015-88888-9999</p>
                        </div>
                    </div>
                    <div className='grid gap-2 w-fit h-fit'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Account</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[14px]'>My Account</p>
                            <p className='text-[14px]'>Login / Register</p>
                            <p className='text-[14px]'>Cart</p>
                            <p className='text-[14px]'>Wishlist</p>
                            <p className='text-[14px]'>Shop</p>
                        </div>
                    </div>
                    <div className='grid gap-2 w-fit h-fit'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Quick Link</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[14px]'>Privacy Policy</p>
                            <p className='text-[14px]'>Terms Of Use</p>
                            <p className='text-[14px]'>FAQ</p>
                            <p className='text-[14px]'>Contact</p>
                        </div>
                    </div>
                    <div className='grid gap-2 w-fit h-fit'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Download App</p>
                            <p className='text-white/20 text-[10px]'>Save $3 with App New User Only</p>
                        </div>
                        <div className='grid grid-cols-2 w-fit gap-3'>
                            <div id='qrCode' className='w-fit'>
                                <img src={QrCode} alt="" />
                            </div>
                            <div className='w-fit'>
                                <img src={GooglePlay} alt="" />
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden px-6 py-9 grid gap-8'>
                    <div className='grid gap-6'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Exclusive</p>
                            <p className='font-bold text-[14px]'>Subscribe</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[12px] text-nowrap'>Get 10% off your first order</p>
                            <div className='border-2 border-white rounded-[4px] flex w-full p-2 gap-2'>
                                <input type="text" className='bg-transparent text-[14px] w-full' placeholder='Enter your email' />
                                <img src={sendIcon} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-6'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Support</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[14px]'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                            <p className='text-[14px]'>exclusive@gmail.com</p>
                            <p className='text-[14px]'>+88015-88888-9999</p>
                        </div>
                    </div>

                    <div className='grid gap-6'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Account</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[14px]'>My Account</p>
                            <p className='text-[14px]'>Login / Register</p>
                            <p className='text-[14px]'>Cart</p>
                            <p className='text-[14px]'>Wishlist</p>
                            <p className='text-[14px]'>Shop</p>
                        </div>
                    </div>

                    <div className='grid gap-6'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Quick Link</p>
                        </div>
                        <div className='grid gap-4'>
                            <p className='text-[14px]'>Privacy Policy</p>
                            <p className='text-[14px]'>Terms Of Use</p>
                            <p className='text-[14px]'>FAQ</p>
                            <p className='text-[14px]'>Contact</p>
                        </div>
                    </div>

                    <div className='grid gap-6'>
                        <div className='grid gap-2'>
                            <p className='font-bold text-[18px]'>Download App</p>
                            <p className='text-white/20 text-[10px]'>Save $3 with App New User Only</p>
                        </div>
                        <div className='grid grid-cols-2 w-fit gap-3'>
                            <div id='qrCode' className='w-fit'>
                                <img src={QrCode} alt="" />
                            </div>
                            <div className='w-fit'>
                                <img src={GooglePlay} alt="" />
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-white/20 text-[12px] py-4 w-full border-t border-white/10 text-center'>Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>

        </>
    )
}

export default Footer