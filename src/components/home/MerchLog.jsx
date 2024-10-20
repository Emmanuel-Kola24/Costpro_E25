// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const MerchLog = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div>
//       <div>
//         <h1 className='text-4xl text-center justify-center font-semibold mb-3'>MERCHANT LOGIN</h1>
//       </div>  

//       <form className="max-w-sm mx-auto border-2 py-6 px-6">
//         <div className="mb-5">
//           <input
//             type="email"
//             id="email"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Email Address"
//             required
//           />
//         </div>

//         <div className="mb-5 relative">
//           <input
//             type={passwordVisible ? 'text' : 'password'}
//             id="password"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Password"
//             required
//           />
//           <div
//             className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//             onClick={togglePasswordVisibility}
//           >
//             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//           </div>
//         </div>

//         <div>
//           <h2 className='text-blue-600 mb-3 underline decoration-dotted'>Forgot Password?</h2>
//         </div>

//         <div className="flex items-start mb-5">
//           <div className="flex items-center h-5">
//             <input
//               id="remember"
//               type="checkbox"
//               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//               required
//             />
//           </div>
//           <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//             Keep me signed in
//           </label>
//         </div>
//         <p className='text-sm'>Check this box only when on a private device</p>

//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-4 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full border-b-2"
//         >
//           Sign in
//         </button>

//         <div>
//           <p className='text-left mt-4'>New to Costo? </p>
//         </div>

//         <Link to="/RegPage">
//           <button
//             type="button"
//             className="text-blue-600 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-4 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full border-b-2"
//           >
//             Create Account
//           </button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default MerchLog;
