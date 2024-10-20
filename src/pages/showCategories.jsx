import React, { useEffect, useState } from 'react';

const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2'; // Replace with your actual API

const ShowCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/categories`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }

        const result = await response.json();
        setCategories(result);  // Set the categories in the state
        setLoading(false);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching categories');
        setLoading(false);
      }
    };

    fetchCategories();  // Fetch the categories when the component mounts
  }, []);

  if (loading) {
    return <p className="text-center">Loading categories...</p>;  // Show loading indicator
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;  // Show error message
  }

  return (
    <div className='pt-28'>
      <h1 className="text-2xl font-bold text-center">Categories List</h1>

      <div className="p-4 space-y-4">
        {categories.length > 0 ? (
          categories?.map((category) => (
            <div key={category.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{category.name || 'Unnamed Category'}</h2>
              {category.image && (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-32 h-32 object-cover mt-2"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-center">No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default ShowCategories;
