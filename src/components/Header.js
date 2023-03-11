import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      <div className="flex bg-amazon_blue items-center p-1 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className=" hidden sm:flex bg-yellow-400 cursor-pointer h-10 items-center hover:bg-yellow 500  rounded-md flex-grow">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink focus:outline-none rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center space-x-6 mx-6 whitespace-nowrap text-xs">
          <div className="link">
            <p>Hello Maharsh Dave</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">Orders</p>
          </div>
          <div className=" relative link flex items-center">
            <span className="absolute rounded-full bg-yellow-400 text-black h-4 w-4 top-0 text-center font-bold right-0 md:right-10">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
