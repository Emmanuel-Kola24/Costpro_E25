import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';

const PassChangePage = ({ merchant_id, setIsAuthenticated, setMerchantData }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();  // Initialize navigate

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const changePass = async (e) => {
        e.preventDefault();

        // Password length validation
        if (newPassword.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        // Clear the error message if validation passes
        setErrorMessage('');

        try {
            const response = await fetch(`${BASE_URL}/merchants/${merchant_id}/change-passwd`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    old_password: oldPassword,
                    new_password: newPassword,
                }),
            });

            const contentType = response.headers.get('content-type');
            let result;
            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Unexpected response: ${text}`);
            }

            if (response.ok) {
                alert('Password change successful!');
                setIsAuthenticated(false);  // Set authentication to false after password change
                setMerchantData(result);    // Update merchant data

                // Redirect to LoginPage after successful password change
                navigate('/LoginPage');
            } else {
                setErrorMessage(result.message || 'Password change failed. Please try again.');
            }
        } catch (error) {
            setErrorMessage(`Password change failed: ${error.message}`);
        }
    };

    return (
        <div>
            <form onSubmit={changePass} className="max-w-sm mx-auto border-2 py-6 px-6 mt-28">
                <div className="mb-5 relative">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="oldPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Old Password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
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
                        id="newPassword"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
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
                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                <button
                    type="submit"
                    className="text-blue-600 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-4 text-sm px-5 py-2.5 text-center w-full"
                >
                    Change Password
                </button>
            </form>
        </div>
    );
};

export default PassChangePage;
