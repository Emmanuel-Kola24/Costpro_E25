import React from 'react'
import img2 from '../components/img/1695556-847__1.webp'
import { FaStar } from "react-icons/fa";

import { FaStarHalfAlt } from "react-icons/fa";

const CartPage = () => {
  return (
    <div>
      <div className='border-b-2 pb-4 mb-4 mt-4 border-t-2 py-4'>
      <h1 className='text-4xl ml-6 border-b-2 py-4 mb-2'>Cart</h1>
      <p className='ml-6'>
      Your shopping cart is empty. Please add at least one item to your cart before checking out.</p>
      <button className='text-white mx-10 bg-blue-700 px-8 py-4 ml-6 mt-4'>Continue Shopping</button>
      </div>
      <div className='border-b-2 mb-8 pb-4'>

      </div>
      <div className='grid grid-cols-3'>
        <div></div>
        <div></div>
        <div className='border flex flex-col w-[420px] py-3 px-3'>
          <div className='flex justify-between mb-4'>
          <h2>Subtotal</h2><p>$28,379.90</p>
          </div>
          <div className='flex justify-between mb-4'>
          <h2>Discount on order</h2><p>-$400.00</p>
          </div>
          <div className='flex justify-between border-b-2 mb-4'>
          <h2>Shipping & handling for </h2><p>$0.00</p>
          </div>
          <div className='flex justify-between  mb-4' >
          <h2>Estimated Total </h2><p>$27.979.90</p>
          </div>
          <p className='mb-4'>Applicable taxes will be calculated at checkout</p>

          <button className='text-white bg-green-600 w-full mb-4'>Checkout</button>
                 
          
          
          
          
          
        </div>
      </div>
      <div className='mb-40'>
      <div>
        <h2 className='text-2xl ml-4'>Recently Viewed Products</h2>
      </div>
      <div className='grid grid-cols-5 mx-6 gap-4'>
        <div><img src={img2} alt="" />
        <h2>$300 OFF</h2>
        <h2 className='text-blue-700 underline text-decoration decoration-dotted'>Brinley 7-piece Dining Table Set</h2>
        <p className='flex mx-auto text-blue-700 mt-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='ml-6 text-gray-900'>  (26) </span></p>
        </div>
        <div><img src={img2} alt="" />
        <h2>$300 OFF</h2>
        <h2 className='text-blue-700 underline text-decoration decoration-dotted'>Brinley 7-piece Dining Table Set</h2>
        <p className='flex mx-auto text-blue-700 mt-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='ml-6 text-gray-900'>  (26) </span></p>
        </div>
        <div><img src={img2} alt="" />
        <h2>$300 OFF</h2>
        <h2 className='text-blue-700 underline text-decoration decoration-dotted'>Brinley 7-piece Dining Table Set</h2>
        <p className='flex mx-auto text-blue-700 mt-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='ml-6 text-gray-900'>  (26) </span></p>
        </div>
        <div><img src={img2} alt="" />
        <h2>$300 OFF</h2>
        <h2 className='text-blue-700 underline text-decoration decoration-dotted'>Brinley 7-piece Dining Table Set</h2>
        <p className='flex mx-auto text-blue-700 mt-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='ml-6 text-gray-900'>  (26) </span></p>
        </div>
        <div><img src={img2} alt="" />
        <h2>$300 OFF</h2>
        <h2 className='text-blue-700 underline text-decoration decoration-dotted'>Brinley 7-piece Dining Table Set</h2>
        <p className='flex mx-auto text-blue-700 mt-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='ml-6 text-gray-900'>  (26) </span></p>
        </div>
       
       
      </div>
    </div>
    </div>
  )
}

export default CartPage
