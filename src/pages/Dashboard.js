import React from 'react';
// import Test_Hero from '../components/home/Test_Hero';
// import Featured from '../components/home/Featured';
// import Hero from '../components/home/Hero';
// import Feature from '../components/home/Feature';
// import Feature2 from '../components/home/Feature2';
// import MerchLog from '../components/home/MerchLog';
import { AiOutlineDollar } from "react-icons/ai";

export default function Dashboard () {
  return (
    <>
      <div className='w-[81%] z-45 relative h-[620px] ml-72 mt-16'>
        <h1 className='text-white'>Hello, Welcome Here</h1>
        <div className='grid grid-cols-4'>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3 flex '>
          <div className=''><AiOutlineDollar /></div>
            <h2 className='flex mb-3'>Total Profit</h2>
            <p>1,012</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Total Profit</h2>
            <p>1,012</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-cyan-500/50 p-3'>
            <h2 className='flex mb-3'>Total Profit</h2>
            <p>1,012</p>
          </div>
          <div className='border border-r-2 bg-white w-44  shadow-lg shadow-pink-500/50 p-3'>
            <h2 className='flex mb-3'>Total Profit</h2>
            <p>1,012</p>
          </div>

        </div>

      </div>
      {/* <MerchLog /> */}
    </>
  );
};
