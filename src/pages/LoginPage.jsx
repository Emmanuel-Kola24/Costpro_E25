import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';  // API Base URL

const LoginPage = ({ setIsAuthenticated, setShowRegPage, setMerchantData, setShowPassChangepage }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    // Clear the error message if validation passes
    setErrorMessage('');

    // Send login data to the API
    try {
      const response = await fetch(`${BASE_URL}/merchants/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      const result = await response.json();
      console.log(result)

      if (response.ok) {
        alert("successful")
        setIsAuthenticated(true)
        setMerchantData(result)
        // localStorage.setItem('firstLogin', true)
        window.location.href = "/";
      } 
    } catch (error) {
      setErrorMessage(`Login failed: ${error.message}`);
    }
  };

  const handleCreateAccount = () => {
    setShowRegPage(true);  // Switch to registration page
  };
  const handleChangePassword = () => {
    setShowPassChangepage(true);  // Switch to change password page page
  };

  return (
    <div>
      <div>
        <h1 className='text-4xl text-center justify-center font-semibold mb-3'>MERCHANT LOGIN</h1>
      </div>  

      <form onSubmit={handleLogin} className="max-w-sm mx-auto border-2 py-6 px-6">
        <div className="mb-5">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-5 relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Display error message if exists */}
        {/* {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} */}

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-4 text-sm px-5 py-2.5 text-center w-full"
        >
          Sign in
        </button>

        <div>
          <p className='text-left mt-4'>New to Costo? </p>
        </div>

        <button
          type="button"
          onClick={handleCreateAccount}
          className="text-blue-600 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-4 text-sm px-5 py-2.5 text-center w-full"
        >
          Create Account
        </button>
       
      </form>
    </div>
  );
};

export default LoginPage;
