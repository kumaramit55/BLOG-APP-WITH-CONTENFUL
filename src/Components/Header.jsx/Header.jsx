import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 '>
      <nav className=''>
        <ul className='flex justify-center gap-4 text-xs sm:text-xl font-serif text-violet-500'>
            <NavLink to="" className={({isActive})=>`${isActive?"text-orange-500":"text-violet-500"}`}>Articels</NavLink>
            <NavLink to="AboutMe" className={({isActive})=>`${isActive?"text-orange-500":"text-violet-500"}`}>About Me</NavLink>  
            <NavLink to="ContactMe" className={({isActive})=>`${isActive?"text-orange-500":"text-violet-500"}`}>Contact Me</NavLink> 
            {/* <NavLink to="Article1" className={({isActive})=>`${isActive?"text-orange-500":"text-violet-500"}`}>Article1</NavLink>  */}
        </ul>
      </nav>
      <div className='flex flex-col  justify-center items-center my-28'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgwgDdKTZaZiTFhG6BoNNPu_zSjxPRj-M3g&s"
       alt="" className='rounded-full' style={{width:200,height:200}}/>
       <h1 className='text-3xl font-medium my-6'>Margaret Smith</h1>
       <p className='text-2xl font-medium w-4/5 text-gray-500 font-serif'>Writer at The Daily Times spending all of my free time writing stories</p>
      </div>
      </div>
     
  )
}

export default Header
