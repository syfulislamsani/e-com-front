import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
    
    const [visible, setVisible] = useState(false);
    
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () =>{
      navigate('/login')
      localStorage.removeItem('token');
      setToken('')
      setCartItems({})
    }
  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      <Link to='/'><img src={assets.logo_main} className="w-12 md:w-14" alt="logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        {/* <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="search icon" /> */}
        <svg onClick={()=>setShowSearch(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <div className="group relative">
            {/* <img onClick={()=>token ? null : navigate('/login')} className="w-5 cursor-pointer " src={assets.profile_icon} alt="profile icon" /> */}
            <svg onClick={()=>token ? null : navigate('/login')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            {/* dropdown*/}
            { token && 
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">
                    <p className="cursor-pointer hover:text-black">My Profile</p>
                    <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                    <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
                </div>
              </div>
            }
        </div>
        <Link to="/cart" className="relative">
            {/* <img className="w-5 min-w-5" src={assets.cart_icon} alt="cart icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
        </Link>
        <img onClick={()=> setVisible(true)} className="w-5 cursor-pointer sm:hidden" src={assets.menu_icon} alt="menu" />
      </div>
      {/* side bar for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
