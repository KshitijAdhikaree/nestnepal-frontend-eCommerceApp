import React, { useContext } from 'react'
import { SideBarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import { BsBag } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)
  return (
    <header className='bg-black/40 flex justify-between h-[80px] mb-5 px-10 pt-4'>
      <Link to='/'>
        <h1 className='text-3xl font-bold'>E-Shop</h1>
      </Link>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer flex relative'
      >
        <BsBag className='text-3xl' />
      </div>
    </header>
  )
}

export default Header
