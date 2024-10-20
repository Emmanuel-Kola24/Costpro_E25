// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
// import { useNavigate } from 'react-router-dom';

// const ProductPage = () => {
//   const { state } = useContext(GlobalContext);
//   const product = state.selectedProduct;
//   const navigate = useNavigate();

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <button
//         onClick={() => navigate('/')}
//         className="mb-4 p-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700"
//       >
//         Back to Home
//       </button>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-96 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
//         />
//         <div>
//           <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//             {product.title}
//           </h1>
//           <p className="text-3xl text-green-600">${product.price}</p>
//           <p className="my-4 text-gray-700 dark:text-gray-300">{product.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
// import { useNavigate } from 'react-router-dom';

// const ProductPage = () => {
//   const { state } = useContext(GlobalContext);
//   const product = state.selectedProduct;
//   const navigate = useNavigate();

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="grid grid-cols-3">
//       <div> Product</div>
//       <div>Product</div>
//       <div>Product</div>

//     </div>
//   );
// };



import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import img2 from '../components/img/costco-direct-vector-badge.png'
import { RiPlayListAddLine } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductPage = () => {
  const location = useLocation();
  const { selectedProduct } = location.state || {}; // Use optional chaining

  if (!selectedProduct) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
    <div  className='grid grid-cols-3 mt-4 mx-4 gap-6'>
    <div>
      <h1>{selectedProduct.name}</h1>
      <p>{selectedProduct.price}</p>
      <img src={selectedProduct.img} alt={selectedProduct.name} />
    </div>
    <div>
<img src={img2} alt="" />
      <h2 className='text-2xl'>Brinley 7-piece Dining Table Set </h2>
      <p className='text-sm mt-2'>Item  1782767   |   Model  csc7pd-15</p>
      <p className='flex mx-auto text-blue-700 mt-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> <span className='ml-6 text-gray-900'> 4.4 (27) Write a review</span></p>
      <div className='flex flex-row justify-around'>
        <div>
      <h2 className='mt-4 ml-2 text-left'>Online Price</h2>
        </div>
        <div className='mt-4'>

      <h2>$1,199.99</h2>
        </div>

      </div>
      <div className='flex flex-row justify-around border-b-2'>
        <div>
      <h2 className='mt-4 ml-2 text-left'>Less</h2>
        </div>
        <div className='mt-4'>

      <h2>-$300.00</h2>
        </div>

      </div>
      <div className='flex flex-row justify-around mb-4'>
        <div>
      <h2 className='mt-4 ml-2 text-left'>Your Price</h2>
        </div>
        <div className='mt-4'>

      <h2>$899.99</h2>
        </div>

      </div>

        <p className='text-sm'>Delivery, setup and packaging removal included</p>
        <p className='text-sm'>May be available In-Warehouse at a lower non-delivered price</p>
        <p className='text-sm text-green-600 mt-5'>$300 OFF</p>
        <p className='text-sm text-green-600'>$300 manufacturer's savings is valid 9/25/24 through 10/20/24</p>
        <h2>Features</h2>
        <ul>
          <li>
          Rubberwood and Poplar Solids with Ash Veneers</li>
          <li>Hand-Applied, Multi-Step Finish</li>
          <li>18-Inch Self-Storing Leaf</li>
          <li>Fabric Upholstered Seats</li>
          <li>Protective Floor Glides</li>
                 </ul>
              
    </div>
    <div>
    <div className='flex flex-col border py-6 px-6'>
      <h2 className='font-semibold'>Delivery</h2>
      <h3>Earliest Tuesday, October 8 if ordered now</h3>
      <h3>Delivery ZIP Code: 98101 Change</h3>
      <h3>Your delivery date is not secured until you complete your order.</h3>
      <button><span className='ml-14'>-</span> 1 <span className='mr-12'>+</span> </button>
      <button className='bg-blue-800 text-white'>Add to Cart</button>
    </div>
    <div className='border flex flex-col mt-4 px-4'>
      <h2>Buy in Warehouse</h2>
      <h3>item Not Sold at Seatle</h3>
      <h3 className='text-blue-600'>Check Nearby Warehouses</h3>
    </div>
    <div className='bg-yellow-200 border-yellow-600 py-2 px-8 mt-4'>
      <p>Please make sure that delivery access will be available and you have measured to ensure the item will fit in your space</p>
    </div>
    <button className='flex border border-blue-700 bg-white text-blue-700 mt-6 px-40 rounded-sm py-2'><RiPlayListAddLine className='mr-2 mt-1'/> Add to List</button>
    </div>
    </div>
    <div className='flex flex-row space-x-2 justify-around mt-4 mb-4'>
      <div>Product Details</div>
      <div>Specifications</div>
      <div>Manuals & Guides</div>
      <div>Shipping & Returns</div>
      <div>Reviews</div>
 
                 </div> 
    </div>
  );
};

export default ProductPage;
