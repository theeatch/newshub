import React from "react";
import Image from "next/image";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full h-36 flex justify-center items-center top-0 sticky bg-white/80 z-50">
      <div className="flex flex-col justify-center">
        <div className="flex">
          <Image
            src="/logopic.png"
            alt="logo"
            height={50}
            width={75}
            className="mx-auto"
          />
          <h1 className="text-7xl font-bold mx-auto tracking-tighter text-black/80">
            NewsHub
          </h1>
        </div>
        <div className="text-lg mx-auto py-2 italic">
          Welcome to <span>NewsHub</span>, find your daily insights here!
        </div>
      </div>
    </div>
  );
};

export default Navbar;
