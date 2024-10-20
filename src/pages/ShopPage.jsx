import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import img3 from '../components/img/costco-direct-header-desktop-v2.png'
import img4 from '../components/img/costco-direct-vector-badge.png'
import img5 from '../components/img/4000197020-847__1.webp'

const ShopPage = () => {
  return (
    <div className='flex flex-row py-6 px-6'>
      <div className='w-[30%] px-4'>
        <div className='flex justify-between mb-4'><h2>Filer Results</h2> <p>Clear All</p></div>
        <div className='flex justify-between mb-4'><h2>Category</h2> <p className='mr-4'>-</p></div>
        <div><h2>Furniture</h2></div>
        <div className='flex justify-between text-blue-500 mb-4'><h2>Bedroom Furniture</h2><span className='text-black'> <p className='mr-4'>(41)</p></span></div>
        <div className='flex justify-between text-blue-500 mb-4'><h2>Fireplaces & Stoves</h2><span className='text-black'> <p className='mr-4'>(6)</p></span></div>
        <div className='flex justify-between text-blue-500 mb-4'><h2>Kids & Baby Furniture</h2><span className='text-black'> <p className='mr-4'>(1)</p></span></div>
        <div className='flex justify-between text-blue-500 mb-4'><h2>Kitchen & Dining Room Furniture</h2><span className='text-black'> <p className='mr-4'>(27)</p></span></div>
        <div className='flex justify-between text-blue-500 mb-4'><h2>Living Room Furniture</h2><span className='text-black'> <p className='mr-4'>(87)</p></span></div>
        <div className='flex justify-between text-blue-500 border-b-2 pb-4'><h2>Office & Home Office Furniture</h2><span className='text-black'> <p className='mr-4'>(7)</p></span></div>

        <div className='mt-4'>
          <h2>Delivery Location</h2>
          <p className='underline font-semibold'>98101</p>
        </div>
        <div className='flex justify-between'>
          <h2>Delivery</h2> <p>(167)</p>
        </div>
        <div className='mt-4'>
          <h2>My Warehouse</h2>
          <p className='underline font-semibold mb-2'>Seatle</p>
        </div>
        <div className='flex'>
          <input type="checkbox" />
          <h2 className='ml-2'>Buy in Warehouse</h2>
        </div>
      </div>
      <div className='w-[70%]'>
        <div className='grid grid-cols-2'>
          <div>
            <img className='w-[50%] justify-center items- ml-28' src={img3} alt="" />
          </div>
          <div className='-ml-10'>
            <h2 className='font-semibold text-4xl'>Benefit from Buying More</h2>
            <h3 className='font-semibold'>Combine with other promotions for additional savings!</h3>
            <p>Delivery in 3-5 Days in Most Areas*</p>
            <div className='flex'>
              <p className='font-semibold'>Participating items are marked with </p><img src={img4} alt="" />
            </div>

          </div>

        </div>
        <div className='flex pb-5 border-b-2'>
          <button className=' border border-b-slate-400 py-4 px-4 text-blue-600'>Delivery *</button>
          <button className=' ml-12 border border-b-slate-400 py-4 px-4 text-blue-600'>Show Out of Stock Items *</button>
        </div>
        <div className='grid grid-cols-2 mt-8'>
          <div>
<img src={img5} alt="" />
</div>
<div><p className='font-semibold'>$449.99</p>
<p className='text-blue-600'>True Innovations Paxley Fabric Swivel Glider Recliner</p>
<ul className='list list-disc list-inside'>
  <li>
  Swivel Feature Allows 360-degree Movement</li>
  <li>Extra Plush Back Cushion for Lasting Comfort</li>
  <li>Swivel Feature Allows 360-degree Movement</li>
  <li>Extra Plush Back Cushion for Lasting Comfort</li>
</ul>
<div className='flex mt-4 text-blue-600'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <p className='ml-4 pb-6'>(879)</p></div>
<div className='flex'><BsBoxSeam /> <h2 className='ml-4'>Delivery <span className='text-green-600'>Available</span> </h2></div>
<div className='flex mb-8'> <input type="checkbox" /><h2 className='text-xl ml-4'>Compare Product</h2></div>
<button className='border border-blue-700 text-blue-600 w-8 font-semibold h-8'>-</button>
<button className='border border-blue-700 w-8 font-semibold h-8'>1</button>
<button className='border border-blue-700 text-blue-600 w-8 font-semibold h-8'>+</button>
<button className='text-white bg-blue-600 w-20 h-8'>Add</button>
</div>
        </div>
      </div>

    </div>

  )
}

export default ShopPage
