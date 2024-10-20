import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2'; // API Base URL

const ShowProductPage = ({ merchantData }) => {
  const [productDetail, setProductDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [product_id, setProduct_id] = useState('');

  const params = useParams();

  useEffect(() => {
    if (params) {
      const fetchProducts = async () => {
        setLoading(true); // Start loading spinner
        try {
          const response = await axios.get(`/products/${params.id}`)
          const detail = await response.json();
          setProductDetail(detail);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
          setError(error.message || 'An error occurred while fetching products');
          setLoading(false);
        }
      };
      fetchProducts();
    }
  }, [params]);

  if (loading) {
    return <p className="text-center">Loading products...</p>; // Show loading indicator
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>; // Show error message
  }

  return (
    <div className='flex pt-40 ml-72'>
      <h1 className="text-2xl font-bold text-center mt-60 pt-40">Products List</h1>

      <div className="p-4 space-y-4">
        <div key={productDetail.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{productDetail.name || 'Unnamed Product'}</h2>
          <p>Price: {productDetail.price || 'N/A'}</p>
          {productDetail.image && (
            <img
              src={productDetail.image}
              alt={productDetail.name}
              className="w-32 h-32 object-cover mt-2"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowProductPage;
