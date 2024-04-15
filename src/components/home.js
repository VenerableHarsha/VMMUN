import Footers from "./footer";
import React from "react";
export default function Home() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col" style={{backgroundColor:"black", color:"white", height:"180vh"}}>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-6xl mb-4">
            <span className="font-bold">MV</span>
            MUN{"\n              "}
          </h1>
          <p className="text-2xl mb-8">THE FIRST EDITION</p>
          <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200">Sign Up</button>
        </div>
        <Footers/>
      </div>
   
    );
  }