import React from 'react';
import AboutUsBg from './utilities/Background.svg'; // Assuming the correct path to your SVG file
import roxky from './utilities/Roctor.svg';
function AboutUs() {
  return (
    <div className="h-[1000px] sm:h-screen text-white flex flex-col" style={{backgroundColor:"", color:"white", backgroundImage: `url(${AboutUsBg})` , backgroundSize: 'cover'}}>
        <div className='text-black font-bold flex justify-center text-2xl mt-10 sm:3xl '>About us</div>
        <div className='flex gap-12 justify-center flex-wrap mt-14 '>
            <div className='sm:w-5/12 sm:h-[400px] bg-pink-300 rounded-3xl w-[280px] h-[320px] bc'><div className='flex justify-center mt-4'><img src={roxky} className='w-28 sm:w-40'></img></div></div>
            <div className='sm:w-5/12 sm:h-[400px] bg-pink-300 rounded-3xl w-[280px] h-[320px] bc'></div>
        </div>
    </div>
  );
}

export default AboutUs;
