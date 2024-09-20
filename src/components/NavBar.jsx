import React from 'react'
// TODO: Update buttons to React Link

const NavBar = () => {
  return (
    <header className='px-2'>
      <nav className='flex justify-between'>
        <button className='flex items-center p-2'>
          <img 
            src='src/assets/happy-dog.png' 
            alt='Doggy Data Logo'
            className='w-8 mr-2'
          />
          <span className='text-lg'>Doggy Data</span>
        </button>
        <div>
          <button className='text-lg p-2 mr-4'>Dogs</button>
          <button className='text-lg p-2'>Contact</button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
