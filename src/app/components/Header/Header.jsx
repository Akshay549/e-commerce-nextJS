import React from "react";
import Menu from "../Menu.jsx/Menu";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div className="flex justify-between items-center h-full w-full">
          <Link href="/" className="tracking-wider font-bold text-lg">
            LAMA
          </Link>
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
