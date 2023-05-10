import React, { useContext } from 'react'
import { SideBarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SideBarContext)
  return (
    <header className='bg-black/40'>
      <div>Header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer flex relative'
      >
        <BsBag className='text-3xl'/>
      </div>
    </header>
  )
}

export default Header
