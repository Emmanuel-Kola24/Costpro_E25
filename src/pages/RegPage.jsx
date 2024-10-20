import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';  // API Base URL

const RegPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');  // For displaying error messages
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Simple form validation (passwords match)
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Generate a unique merchant ID using uuid
    const merchantId = uuidv4();

    try {
      // Send registration data to the API
      const response = await fetch(`${BASE_URL}/merchants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          merchant_id: merchantId  // Attach the generated merchant ID
        }),
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();

        if (response.ok) {
          // Store email and merchant ID in localStorage
          localStorage.setItem('email', email);
          localStorage.setItem('merchantID', merchantId); // Save merchant ID
          // console.log('Merchant ID:', merchantId); // Log the merchant ID for debugging

          alert('Account created successfully!');
          navigate('/LoginPage');
        } else {
          alert(`Error: ${result.message}`);
        }
      } else {
        const errorText = await response.text();
        console.error('Response was not JSON:', errorText);
        alert('Registration failed: Unexpected response format. Check console for details.');
      }
    } catch (error) {
      setErrorMessage(`Registration failed: ${error.message}`);
      console.error('Registration Error:', error);
    }
  };

  return (
    <div>
      <h1 className='text-4xl text-center justify-center font-semibold mb-3'>REGISTER</h1>

      <form onSubmit={handleRegister} className="max-w-sm mx-auto border-2 py-6 px-6">
        <div className="mb-5">
          <input
            type="text"
            id="First Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            id="Last Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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

        <div className="mb-5 flex flex-row">
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Phone Number"
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

        <div className="mb-5 relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <p className='text-sm'>
          By creating an account you agree to Costco.com
          <span className='text-blue-500 underline decoration-dotted'> terms and conditions</span> of use
        </p>

        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        <button
          type="submit"
          className="text-white bg-blue-800 hover:bg-blue-800 mt-8 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center w-full border-b-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegPage;
