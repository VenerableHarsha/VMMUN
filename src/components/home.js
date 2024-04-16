import Footers from "./footer";
import React from "react";
import Bg from './utilities/bg.svg'
import Logo from './utilities/mvlogo.svg'

export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col" style={{backgroundColor:"black", color:"white", backgroundImage: `url(${Bg})` , backgroundSize: 'cover'}}>
          
        <div className="flex-1 flex flex-col justify-center ml-[6vw] ">
        <div className="grid grid-cols-2 w-[50%] gap-4">
        <img src={Logo} alt="MV MUN" className="" />
          <div className="border-l-8 pl-6 border-[#8F3B9D] text-[#8F3B9D]">
          <h1 className="text-8xl mb-4 font-light ">
            <span className="font-bold">MV</span>
            MUN{"\n              "}
          </h1>
          <p className="text-2xl mb-8">THE FIRST EDITION</p>
          <button className="bg-[#8F3B9D] text-black px-8 py-3 rounded-full hover:bg-gray-200 items-center w-[8rem] font-black ">Sign Up</button>
          </div>
        </div>
        </div>
        <Footers/>
      </div>
   
    );
  }