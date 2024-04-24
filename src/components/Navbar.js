import React, { useState } from 'react'
import Logo from './utilities/mvlogo.svg'
import AboutUsBg from './utilities/Background.svg'; 



function Navbar() {
    const [flag,setflag]=useState(false);
    
  return (
    <div className='absolute w-[100%]'>
    <div className=' text-black p-3  flex justify-between navbar'>
        <div className='flex items-center'>
            {<img className="w-10 h-10 mr-2" src={Logo} alt='icon'></img>}
            <div className='text-2xl sm:text-3xl'><span className='font-bold'>MV</span>MUN</div>
        </div>
        <div className='flex gap-12 items-center taha cursor-pointer text-sm'>

            <div className='hover:text-purple-600'>About</div>
            <div className='hover:text-purple-600'>Committees</div>
            <div className='hover:text-purple-600'>Secretariat</div>
            <div className='hover:text-purple-600'>Conference Details</div>
            <div className='hover:text-purple-600'>Contact Us</div>
            <div className='bg-black text-black p-2 px-6 rounded-3xl signup font-bold hover:bg-white'>Sign Up</div>

        </div>
        <div className='scrollbar taha2' onClick={()=>{
            setflag(!flag);
        }} >
           <div className='cursor-pointer w-10 rounded-lg h-9 bg-black flex flex-col gap-1.5 justify-center items-center scrollbar2 hover:bg-white'>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
           </div>

        </div>
    </div>
    {flag&&
        <div className='flex flex-col gap-4  p-6 cursor-pointer navbar2 w-screen z-10 sticky' style={{ backgroundImage: `url(${AboutUsBg})` , backgroundSize: 'cover'}}>
           <div className='hover:text-purple-600'>About</div>
            <div className='hover:text-purple-600'>Committees</div>
            <div className='hover:text-purple-600'>Secretariat</div>
            <div className='hover:text-purple-600'>Conference Details</div>
            <div className='hover:text-purple-600'>Contact Us</div>
            <div className='hover:text-purple-600 text-2xl font-black text-white'>Sign Up</div>
        </div>
    }
    </div>
  )
}

export default Navbar