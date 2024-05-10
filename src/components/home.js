import React from "react";
import Bg from './utilities/bg.svg'
import Logo from './utilities/mvlogo.svg'


export default function Home() {
    return (
        <div className=" bg-black text-white flex flex-col z-0 box-inner" style={{ backgroundSize: 'cover'}}>
          <div className="flex flex-col  justify-center items-center align-center mb-[7vh] sm:h-screen " >
          
          <div className="flex flex-col  justify-center items-center align-center sm:mt-[15vh] mt-[18vh]  sm:px-[6vw] px-[18vw] py-[3vh] bg-white rounded-[100px] bg-opacity-[30%] ">
          <img src={Logo} alt="MV MUN" className="brightness-0 drop-shadow-3xl max-w-[60%]" style={{filter: `drop-shadow( 5px 5px 3px rgba(0, 0, 0, .7)) brightness(0)`}}/>
  
            <h1 className="text-4xl sm:text-9xl mb-4 font-light text-black tracking-wide" style={{filter: `drop-shadow( 5px 5px 3px rgba(0, 0, 0, .7))`}}>
              <span className="font-bold ">MV</span>
              MUN{"\n              "}
            </h1>
            <p className="text-xl sm:text-4xl mb-8 text-black font-bold">THE FIRST EDITION</p>

            <button className="bg-[#000000] text-white  py-3 rounded-full hover:bg-[#8F3B9D] items-center w-[8rem] font-black sm:scale-100 sc" onClick={()=> window.open('https://forms.gle/gFoLadAdk1raK6Zs5')}>Sign Up</button>
  
  
          </div>
          
        </div>

        </div>
   
    );
  }