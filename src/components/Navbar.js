import React, { useState } from 'react'
import Logo from './utilities/mvlogo.svg'
import AboutUsBg from './utilities/Background.svg'; 



function Navbar() {
    const [flag,setflag]=useState(false);
    
  return (
    <div className='absolute w-[100%] sticky top-0 z-10'>
    <div className=' text-black p-3  flex justify-between navbar'>
        <div className='flex items-center'>
            {<img className="w-10 h-10 mr-2" src={Logo} alt='icon'></img>}
            <div className='text-2xl sm:text-3xl'><a href='#home'><span className='font-bold'>MV</span>MUN</a></div>
        </div>
        <div className='flex gap-12 items-center taha cursor-pointer text-sm'>

            <div className='hover:text-purple-600'><a href='#about'>About</a></div>
            <div className='hover:text-purple-600'><a href='#committees'>Committees</a></div>
            <div className='hover:text-purple-600'><a href='#secretariat'>Secretariat</a></div>
            <div className='hover:text-purple-600'><a href='#kit'>Conference Details</a></div>
            <div className='hover:text-purple-600'><a href='#contact'>Contact Us</a></div>
            <div className=' text-black p-2 px-4 rounded-3xl font-bold bg-white' ><a href='#cm'>Country Matrix</a></div>
            <div className='bg-black text-black p-2 px-6 rounded-3xl signup font-bold hover:bg-white' onClick={()=> window.open('https://forms.gle/gFoLadAdk1raK6Zs5')}>Sign Up</div>

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
          <div className='hover:text-purple-600'><a href='#about' onClick={()=> setflag(!flag)}>About</a></div>
            <div className='hover:text-purple-600'><a href='#committees' onClick={()=> setflag(!flag)}>Committees</a></div>
            <div className='hover:text-purple-600'><a href='#secretariat' onClick={()=> setflag(!flag)}>Secretariat</a></div>
            <div className='hover:text-purple-600'><a href='#kit'onClick={()=> setflag(!flag)}>Conference Details</a></div>
            <div className='hover:text-purple-600'><a href='#contact' onClick={()=> setflag(!flag)}>Contact Us</a></div>
            <div className='hover:text-purple-600 text-2xl font-black text-white'><a href='#cm' onClick={()=> setflag(!flag)}>Country Matrix</a></div>
            <div className='hover:text-purple-600 text-2xl font-black text-white' onClick={()=> {
                window.open('https://forms.gle/gFoLadAdk1raK6Zs5');
                setflag(!flag);
            }}>Sign Up</div>
        </div>
    }
    </div>
  )
}

export default Navbar