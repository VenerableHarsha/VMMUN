import React, { useState } from 'react'



function Navbar() {
    const [flag,setflag]=useState(false);
    
  return (
    <div className=''>
    <div className=' text-black p-3  flex justify-between navbar'>
        <div className='flex items-center'>
            <img className="w-8 mr-2" src="./public/Mockup@4x.png" alt='icon'></img>
            <div className='text-3xl'><span className='font-bold'>MV</span>MUN</div>
        </div>
        <div className='flex gap-12 items-center taha '>
            <div>Home</div>
            <div>About</div>
            <div>Info</div>
            
            <div className='bg-black text-black p-2 px-6 rounded-3xl signup'>Sign Up</div>

        </div>
        <div className='scrollbar taha2' onClick={()=>{
            setflag(!flag);
        }} >
           <div className='cursor-pointer w-10 rounded-lg h-9 bg-black flex flex-col gap-1.5 justify-center items-center scrollbar2'>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
           </div>

        </div>
    </div>
    {flag&&
        <div className='flex flex-col gap-4  p-6 cursor-pointer navbar2 w-screen'>
           <div className=''>Home</div>
           <div className=''>About</div>
           <div className=''>Info</div>
           <div>Sign up</div>
        </div>
    }
    </div>
  )
}

export default Navbar