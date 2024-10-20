// import React, { useState, useEffect, useRef } from 'react';
// import img1 from './img/Costco-Logo-Registered.png';
// import { MdShoppingCart } from "react-icons/md";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   // State to control the dropdown menu visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isSubMenuOpen, setIsSubMenuOpen] = useState(false); // For second-level submenu

//   // Ref to store the dropdown menu element
//   const dropdownRef = useRef(null);

//   // Toggle submenu visibility
//   const toggleSubMenu = () => {
//     setIsSubMenuOpen(!isSubMenuOpen);
//   };

//   // Toggle dropdown on click
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // useEffect to handle outside click for closing the dropdown
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false); // Close the dropdown if clicked outside
//       }
//     };

//     // Attach the event listener
//     document.addEventListener('mousedown', handleOutsideClick);

//     // Cleanup the event listener on component unmount
//     return () => {
//       document.removeEventListener('mousedown', handleOutsideClick);
//     };
//   }, []);

//   return (
//     <nav className='navbar'>
//       <div className='bg-blue-800 h-8 w-full flex justify-center items-center text-white font-semibold font-xlg'>
//         <h1>Brinley 7-Piece Dining Set - $899.99 After $300 OFF</h1>
//       </div>
//       <div>
//         <ul className='flex flex-col text-blue-500 p-2 pt-8 ml-16 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 w-[3/4]'>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Costco Next</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>While Supplies Last</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Online-Only</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Treasure Hunt</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>What's New</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Member Favourites</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Get Email Offers</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Customer Service</a></li>
//           <li className='flex hover:underline text-blue-900'><a href='#'>Us</a></li>
//         </ul>
//       </div>

//       <div>
//         <nav className="bg-white border-gray-200 dark:bg-gray-900">
//           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
//             <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//               <img src={img1} className="w-[40%]" alt="Costco Logo" />
//             </Link>
//             <div className='mr-36'>

//               <form class="w-[160%]">
//                 <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//                 <div class="relative">
//                   <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
//                     </svg>
//                   </div>
//                   <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />

//                 </div>
//               </form>

//             </div>
//             <div className={`items-center justify-between ${isDropdownOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
//               <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//                 <li>
//                   <Link to="/LoginPage" className="block py-2 px-3  bg-blue-900 rounded md:bg-transparent md:text-blue-900 md:p-0 md:dark:text-blue-900">
//                     Sign in / Register
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/ProductPage" className="block py-2 px-3 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                     Orders & Returns
//                   </Link>
//                 </li>
//                 <li>
//                   <div className='flex flex-row'>
//                     <div>

//                       <MdShoppingCart className='text-blue-600 text-3xl relative' /><p className='absolute ml-6 -mt-10 text-blue-600 bg-white border border-blue-700 h-6 w-6 items-center justify-center text-center rounded-full'>0</p></div>
//                     <Link to="/CartPage" className="block py-2 px-3 ml-8 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
//                       Cart
//                     </Link>

//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div>
//             <ul className='flex bg-blue-900 h-8 w-full justify-around items-center text-white font-xlg'>
//               <li className='relative'>
//                 <button
//                   onClick={toggleDropdown}
//                   className='flex hover:underline text-white'
//                   ref={dropdownRef} // Add ref to this element
//                 >
//                   Shop
//                 </button>
//                 {/* Dropdown Menu */}
//                 {isDropdownOpen && (
//                   <ul className='absolute bg-white text-black mt-2 w-48 shadow-lg'>
//                     <li className='hover:bg-gray-100 px-4 py-2'>
//                       <button onClick={toggleSubMenu}>Electronics</button>
//                       {isSubMenuOpen && (
//                         <ul className='ml-4 mt-2 bg-gray-200'>
//                           <li className='hover:bg-gray-300 px-4 py-2'><a href='#'>Phones</a></li>
//                           <li className='hover:bg-gray-300 px-4 py-2'><a href='#'>Laptops</a></li>
//                         </ul>
//                       )}
//                     </li>
//                     <li className='hover:bg-gray-100 px-4 py-2'><a href='#'>Home & Kitchen</a></li>
//                     <li className='hover:bg-gray-100 px-4 py-2'><a href='#'>Clothing</a></li>
//                   </ul>
//                 )}
//               </li>
//               <li className='flex hover:underline text-white'><a href='#'>Costco Next</a></li>
//               <li className='flex hover:underline text-white'><a href='#'>While Supplies Last</a></li>
//               <li className='flex hover:underline text-white'><a href='#'>Online-Only</a></li>
//               <li className='flex hover:underline text-white'><a href='#'>Treasure Hunt</a></li>
//               <li className='flex hover:underline text-white'><a href='#'>What's New</a></li>
//               <li className='flex hover:underline text-white'><a href='#'>Member Favourites</a></li>
//               <li className='flex hover:underline text-white'><a href='#'>Get Email Offers</a></li>
//               <li className='flex hover:underline text-white'>
//               <Link to="/LoginPage">
//                     Merchant Login
//                   </Link>

//               </li>
//               <li className='flex hover:underline text-white'><a href='#'>Us</a></li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
