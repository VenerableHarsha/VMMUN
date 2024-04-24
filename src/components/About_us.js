import React from 'react';
import AboutUsBg from './utilities/Background.svg'; // Assuming the correct path to your SVG file
import roxky from './utilities/Roctor.svg';
import vini from './utilities/vinimaya.svg';
function AboutUs() {
  return (
    <div className="h-[1250px] sm:h-[160vh] text-white flex flex-col" style={{backgroundColor:"#8f3b9d", color:"white", backgroundImage: `url(${AboutUsBg})` , backgroundSize: 'cover'}}>
        <div style={{fontFamily: "Bahnschrift", fontSize: "2rem", fontWeight: "900"}} className='text-black font-bold flex justify-center text-2xl mt-10 sm:3xl '>About us</div>
        <div className='flex gap-12 justify-center flex-wrap mt-14 '>
            <div className='sm:w-5/12 sm:h-[400px] bg-pink-300 rounded-3xl w-[280px] h-[320px] bc'><div className='flex justify-center mt-4'><img src={roxky} className='w-28 sm:w-40'></img></div></div>
            <div className='sm:w-5/12 sm:h-[400px] bg-pink-300 rounded-3xl w-[280px] h-[320px] bc'><div className='flex justify-center mt-4'><img src={vini} className='w-28 sm:w-40'></img></div></div>
            
        </div> 
        <div className='w-[100%] flex justify-center mt-12'>
        <div className='sm:w-5/12 sm:h-[300px] bg-pink-300 bc rounded-3xl flex w-[280px] h-[250px]'></div>
        </div>
    </div>
  );
}

export default AboutUs;
