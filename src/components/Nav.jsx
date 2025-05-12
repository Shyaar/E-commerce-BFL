import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import DropDown from './ui/DropDown';
import { useEffect, useState } from 'react';
import { TbMenu3 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import RightNav from './ui/RightNav';
import Adds from './ui/Add';
import CartBtn from './ui/btns/CartBtn';
import WishListBtn from './ui/btns/WishListBtn';
import Logo from '/Shwan.png'


const Nav = () => {
    const navLinkStyles = ({ isActive }) =>
        isActive ? 'w-full p-2 bg-gray-100 lg:text-black lg:underline lg:bg-transparent' : 'text-black text-[15px] p-2';

    const [dropVisible, setDropVisible] = useState(false)
    const [profileActive, setProfileActive] = useState(false)
    const [dropDownMenu, setDropDownMenu] = useState(false)
    const [categories, setCategories] = useState(false)

    const location = useLocation()

    useEffect(()=>{
        setDropDownMenu(false)
    },[location])



    const toggleDropDownMenu = () => {
        console.log("clicked")
        setDropDownMenu(!dropDownMenu)
    }


    return (
        <div>
            <nav className='hidden lg:flex lg:flex-col z-20'>
                <Adds />
                <div className='flex justify-between items-center mx-24 p-2'>
                    <div className='flex'><img src={Logo} alt="" className='w-8 h-8' /><h1 className='text-[24px] font-bold'><Link to="/">ShwanDmall</Link></h1></div>
                    <ul className='flex gap-9'>
                        <li><NavLink className={navLinkStyles} to="/">Home</NavLink></li>
                        <li><NavLink className={navLinkStyles} to="contact">Contact</NavLink></li>
                        <li><NavLink className={navLinkStyles} to="/about">About</NavLink></li>
                        <li><NavLink className={navLinkStyles} to="/signup">Sign Up</NavLink></li>
                    </ul>
                    <div className='flex items-center gap-8'>
                        <div id="search" className='bg-[#F5F5F5] p-2 flex items-center'>
                            <input type="search" placeholder='What are you looking for?' className='bg-transparent text-black' />
                            <IoIosSearch className='text-[24px]' />
                        </div>

                        <div className='flex justify-between gap-5 h-full w-full relative'>

                            <Link to="/wishlist"> <WishListBtn /> </Link>

                            <Link to="/Cart"><CartBtn /></Link>
                            


                            <FiUser
                                id='profile'
                                onClick={() => {
                                    setDropVisible(prev => !prev)
                                    setProfileActive(prev => !prev)
                                }
                                }
                                className={`text-[30px] p-1 cursor-pointer  ${profileActive ? 'bg-red-500 text-white rounded-full' : ''}`}
                            />

                            {dropVisible && (
                                <div id='dropDown' className='bg-black/30 p-5 absolute top-10 backdrop-blur-md right-0'>
                                    <DropDown text="Manage My Account" icon={<FiUser />} />
                                    <DropDown text="My Order" icon={<FiUser />} />
                                    <DropDown text="My Cancellations" icon={<FiUser />} />
                                    <DropDown text="My Reviews" icon={<FiUser />} />
                                    <DropDown text="Logout" icon={<FiUser />} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
            <div id="MobileNav" className='lg:hidden fixed top-0 z-20 bg-white w-full'>
                <Adds />
                <div className='mx-4 grid gap-4'>
                    <div className='flex justify-between items-center'>
                        <div className='text-[16px] font-bold w-full'><Link to="/" className='flex items-center gap-2'><img src={Logo} className='w-6 h-6' alt="" />ShwanDmall</Link></div>
                        <div className='flex justify-between gap-2 h-full relative'>

                            <Link to="/wishlist"> <WishListBtn /> </Link>
                            <Link to="/Cart"><CartBtn /></Link>

                            <FiUser id='profile'
                                onClick={() => {
                                    setDropVisible(prev => !prev)
                                    setProfileActive(prev => !prev)
                                }
                                }
                                className={`text-[30px] p-1 cursor-pointer  ${profileActive ? 'bg-red-500 text-white rounded-full' : ''}`}

                            />

                            {dropVisible && (
                                <div id='dropDown' className='bg-black/30 p-5 absolute top-10 backdrop-blur-md right-0'>
                                    <DropDown text="Manage My Account" icon={<FiUser />} />
                                    <DropDown text="My Order" icon={<FiUser />} />
                                    <DropDown text="My Cancellations" icon={<FiUser />} />
                                    <DropDown text="My Reviews" icon={<FiUser />} />
                                    <DropDown text="Logout" icon={<FiUser />} />
                                </div>
                            )}
                        </div>
                        <div onClick={() => {
                            toggleDropDownMenu()
                        }}>
                            {dropDownMenu ? <AiOutlineClose /> : <TbMenu3 />}
                        </div>
                        {dropDownMenu && (
                            <>
                                <div className='relative'>
                                    <div className='bg-white fixed gap-9 p-2 right-0 top-32 w-2/4'>
                                        <ul className='grid'>
                                            <NavLink className={navLinkStyles} to="/">Home</NavLink>
                                            <NavLink className={navLinkStyles} to="contact">Contact</NavLink>
                                            <NavLink className={navLinkStyles} to="/about">About</NavLink>
                                            <NavLink className={navLinkStyles} to="/signup">Sign Up</NavLink>
                                            <NavLink className={navLinkStyles} to="/signup">Sign Up</NavLink>
                                        </ul>
                                        <p onClick={() => setCategories(true)} className='p-2'>Categories</p>
                                    </div>
                                </div>

                                {categories && (
                                    <div className=''>
                                        <div id="rightNav" className="fixed top-0 left-0 flex flex-col gap-4 border-r py-10 bg-white w-full border border-red-900 items-center">


                                            <AiOutlineClose onClick={() => {
                                                setCategories(false)
                                                console.log('clicked close')
                                            }} className='mb-6' />

                                            <RightNav text="Woman’s Fashion" />
                                            <RightNav text="Men's Fashion" />
                                            <RightNav text="Electronics" />
                                            <RightNav text="Home & Lifestyle" />
                                            <RightNav text="Medicine" />
                                            <RightNav text="Sports & Outdoor" />
                                            <RightNav text="Baby’s & Toys" />
                                            <RightNav text="Groceries & Pets" />
                                            <RightNav text="Health & Beauty" />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div id="search" className='bg-[#F5F5F5] p-2 flex items-center justify-between'>
                        <input type="search" placeholder='What are you looking for?' className='bg-transparent text-black' />
                        <IoIosSearch className='text-[16px]' />
                    </div>


                </div>

            </div>
            <hr className='my-2' />
        </div>
    );
}

export default Nav;