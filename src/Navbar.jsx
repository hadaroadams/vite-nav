import React, { useState } from 'react'
import logo from './assets/logo.svg'
function Navbar() {
  const [slide,setSlide] = useState(false)
  return (
    <>
        <nav className={`bg-slate-100 ${slide?'h-[220px]':'h-[52px]'} overflow-hidden duration-300  md:h-[52px] md:duration-0`}>
            <div className=' px-4 flex justify-between items-center'>
                <img src={logo} alt="" />
                <button className=' text-2xl text-sky-500 hover:rotate-90 duration-300 md:hidden' onClick={()=>{setSlide(!slide)}}><i class="fa-solid fa-bars"></i></button>
                
                    <ul className='text-lg hidden md:flex space-x-4 tracking-wider'>
                      <li className=''><a href="">Home</a></li>
                      <li className=''><a href="">About</a></li>
                      <li className=''><a href="">Project</a></li>
                      <li className=''><a href="">Contact</a></li>
                      <li className=''><a href="">Profile</a></li>
                  </ul>
                  <ul className=' text-lg  hidden md:flex space-x-2'>
                      <li className=''><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                      <li className=''><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                      <li className=''><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                      <li className=''><a href=""><i class="fa-brands fa-behance"></i></a></li>
                  </ul>
                </div>
  
                <ul className='my-4 text-lg -tracking-wider'>
                    <li className='w-full px-4 duration-200 hover:bg-sky-400 hover:pl-8 cursor-pointer'><a href="">Home</a></li>
                    <li className='w-full px-4 duration-200 hover:bg-sky-400 hover:pl-8 cursor-pointer'><a href="">About</a></li>
                    <li className='w-full px-4 duration-200 hover:bg-sky-400 hover:pl-8 cursor-pointer'><a href="">Project</a></li>
                    <li className='w-full px-4 duration-200 hover:bg-sky-400 hover:pl-8 cursor-pointer'><a href="">Contact</a></li>
                    <li className='w-full px-4 duration-200 hover:bg-sky-400 hover:pl-8 cursor-pointer'><a href="">Profile</a></li>
                </ul>

        </nav>
    </> 
  )
}

export default Navbar
