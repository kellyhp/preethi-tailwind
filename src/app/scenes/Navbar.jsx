"use client";
import { useState } from "react";
import Link from 'next/link';
import useMediaQuery from "../hooks/useMediaQuery";

const handleOrderClick = () => {
    window.open('https://www.doordash.com/store/preethi-indian-cuisine-davis-240317/', '_blank');
  };

const Navbar = ()  => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return(
        <nav className = {`bg-purple z-40 w-full fixed top-0 py-4`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
            <h4 className="font-unna text-3l font-bold"></h4>
            {/* DESKTOP NAV */}
            {isAboveSmallScreens ? (
                <div className="text-white flex justify-between gap-16 items-center font-unna text-base font-bold">
                    <Link href="/" className="hover:text-dark-yellow transition duration-500"> Home </Link>
                    <Link href="/catering" className="hover:text-dark-yellow transition duration-500"> Catering </Link>
                    <Link href="/buffet" className="hover:text-dark-yellow transition duration-500"> Buffet </Link>
                    <Link href="/menu" className="hover:text-dark-yellow transition duration-500"> Menu </Link>
                    <Link href="/contact" className="hover:text-dark-yellow transition duration-500"> Contact </Link>
                        <button
                            className="bg-dark-yellow hover:bg-white hover:text-dark-yellow 
                            text-white font-bold py-2 px-4 rounded-full transition duration-500"
                            onClick={handleOrderClick}
                        >
                            Order Online
                        </button>
                </div>
            ) : ( <button className="rounded-full bg-purple p-2" 
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="white"/>
                </svg>
              </button>)}

            {/* MOBILE MENU POPUP */}
            {!isAboveSmallScreens && isMenuToggled && (
                 <div className="fixed right-0 bottom-0 h-full bg-purple w-[300px]"> 
                 {/* CLOSE ICON */}
                 <div className = "flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" fill-opacity="0.54"/>
                    </svg>
                    </button>
                 </div>
                  {/* MENU ITEMS */}
                  <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white"> 
                  <Link href="/" className="hover:text-dark-yellow transition duration-500">Home</Link>
                  <Link href="/catering" className="hover:text-dark-yellow transition duration-500">Catering</Link>
                  <Link href="/buffet" className="hover:text-dark-yellow transition duration-500">Buffet</Link>
                  <Link href="/menu" className="hover:text-dark-yellow transition duration-500">Menu</Link>
                  <Link href="/contact" className="hover:text-dark-yellow transition duration-500">Contact</Link>
                  <a className="hover:text-dark-yellow transition duration-500 text-white" 
                    href="https://www.doordash.com/store/preethi-indian-cuisine-davis-240317/" target="_blank">Order Online</a>
                  </div>
                </div>
            )}
            </div>
        </nav>
    )
}

export default Navbar;