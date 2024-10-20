import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateCategory = () => {
  const [catMerchName, setCatMerchName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [isCategoryPageVisible, setIsCategoryPageVisible] = useState(false); // Toggle for category page visibility

  const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2'; // Replace with your actual API

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const categoryData = {
      merchant_id: catMerchName,
      name: categoryName,
      image: categoryImage,
    };

    try {
      const response = await fetch(`${BASE_URL}/categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...categoryData }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Created category successfully');

        // Save the category ID in local storage
        const categoryIDs = JSON.parse(localStorage.getItem('categoryIDs')) || [];
        categoryIDs.push(result.id);
        localStorage.setItem('categoryIDs', JSON.stringify(categoryIDs));

        // Store the whole response in local storage
        localStorage.setItem('category_Data', JSON.stringify(result));

        // Redirect to dashboard
        window.location.href = '/dashboard'; // Update with the correct dashboard route
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error creating category:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div> 
      <button
        id="createCategory"
        className="bg-blue-500 text-white p-2 rounded-lg ml-64 mt-24  mb-8"
        onClick={() => setIsCategoryPageVisible(!isCategoryPageVisible)}
      >
        Create Category
      </button>

      {isCategoryPageVisible && (
        <div id="categoryPage" className="flex ml-80 mt-24">
          <form id="categoryForm" onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Merchant ID</label>
              <input
                type="text"
                id="catMerchName"
                // value={`${Category_id}`}
                onChange={(e) => setCatMerchName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Category Name</label>
              <input
                type="text"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Category Image URL</label>
              <input
                type="text"
                id="categoryImage"
                value={categoryImage}
                onChange={(e) => setCategoryImage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
<Link to="/Sidebar">
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateCategory;
