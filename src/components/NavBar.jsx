import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='px-2'>
      <nav className='flex justify-between'>
        <NavLink className='flex items-center p-2' to="/">
          <img 
            src='src/assets/happy-dog.png' 
            alt='Doggy Data Logo'
            className='w-8 mr-2'
          />
          <span className='text-lg'>Doggy Data</span>
        </NavLink>
        <div>
          <NavLink to='/dogs' className='text-lg p-2 mr-4'>Dogs</NavLink>
          <NavLink to='/contact' className='text-lg p-2'>Contact</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
