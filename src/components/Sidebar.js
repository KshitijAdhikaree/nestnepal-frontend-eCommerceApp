import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SideBarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SideBarContext)
  const { cart, clearCart, total } = useContext(CartContext)

  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
        <div
          onClick={handleClose}
          className='cursor-pointer w-8 h-8 flex justify-center items-center'
        >
          <IoMdArrowForward className='text-2xl' />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>
      <div>
        <div className='bg-black/10 flex w-full justify-between items-center'>
          <div>
            <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className='cursor-pointer py-4 text-red-800 w-12 h-12 flex justify-center items-center text-2xl'
          >
            <FiTrash />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
