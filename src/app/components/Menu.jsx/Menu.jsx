"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Image
        src="/menu.png"
        alt="logo"
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={() => setIsOpen((val) => !val)}
      />
      {isOpen && (
        <div className="absolute  left-0 top-20 h-[calc(100vh-80px)] w-screen gap-6 z-10 bg-black flex flex-col justify-center items-center text-xl">
          <Link href="/" className="text-lg text-white hover:text-gray-200">
            Homepage
          </Link>
          <Link href="#" className="text-lg text-white hover:text-gray-200">
            Shop
          </Link>
          <Link href="#" className="text-lg text-white hover:text-gray-200">
            Deals
          </Link>
          <Link href="#" className="text-lg text-white hover:text-gray-200">
            About
          </Link>
          <Link href="#" className="text-lg text-white hover:text-gray-200">
            Contact
          </Link>
          <Link href="#" className="text-lg text-white hover:text-gray-200">
            Logout
          </Link>
          <Link href="#" className="text-lg text-white hover:text-gray-200">
            Cart(1)
          </Link>
        </div>
      )}
    </>
  );
};

export default Menu;
