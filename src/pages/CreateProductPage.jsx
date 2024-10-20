import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProductPage = ({ merchantData }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    productDescp: '',
    productPrice: '',
    brandName: '',
    productQuantity: '',
    productImage: '',
    productCurrency: '',
    productMinQuantity: '',
    productMaxQuantity: '',
    productDiscount: '',
    productRefund: false,
    productDiscountAvailable: false,
    productShipping: false,
    shippingLocations: {
      nigeria: false,
      ghana: false,
      southAfrica: false,
    },
    otherDetails: {
      productOrigin: '',
      productBrandName: '',
      productMidsoleCategory: '',
      productSeason: '',
      productGender: '',
      productSupplyAbility: '',
    },
    category_id: '', // Add category_id in state
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Set category_id dynamically when merchantData changes
  useEffect(() => {
    if (merchantData && merchantData.id) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        category_id: merchantData.id,
      }));
    }
  }, [merchantData]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLocationChange = (location) => {
    setFormData((prev) => ({
      ...prev,
      shippingLocations: {
        ...prev.shippingLocations,
        [location]: !prev.shippingLocations[location],
      },
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.productName) newErrors.productName = 'Product name is required';
    if (!formData.productDescp) newErrors.productDescp = 'Product description is required';
    if (!formData.productPrice || isNaN(formData.productPrice)) newErrors.productPrice = 'Valid product price is required';
    if (!formData.brandName) newErrors.brandName = 'Brand name is required';
    if (!formData.productQuantity || isNaN(formData.productQuantity)) newErrors.productQuantity = 'Valid product quantity is required';
    if (!formData.productImage) newErrors.productImage = 'Product image URL is required';
    if (!formData.productCurrency) newErrors.productCurrency = 'Product currency is required';
    if (!formData.productMinQuantity || isNaN(formData.productMinQuantity)) newErrors.productMinQuantity = 'Minimum quantity is required';
    if (!formData.productMaxQuantity || isNaN(formData.productMaxQuantity)) newErrors.productMaxQuantity = 'Maximum quantity is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setResponseMessage('Please fix the validation errors and try again.');
      return;
    }

    if (!merchantData?.id) {
      setResponseMessage('Invalid merchant ID.');
      console.error('Merchant ID is missing or invalid.');
      return;
    }

    const productData = {
      productName: formData.productName,
      productDescription: formData.productDescp,
      productPrice: formData.productPrice,
      brandName: formData.brandName,
      productQuantity: formData.productQuantity,
      productImage: formData.productImage,
      productCurrency: formData.productCurrency,
      productMinQuantity: formData.productMinQuantity,
      productMaxQuantity: formData.productMaxQuantity,
      productDiscount: formData.productDiscount,
      productRefund: formData.productRefund,
      productDiscountAvailable: formData.productDiscountAvailable,
      productShipping: formData.productShipping,
      shippingLocations: formData.shippingLocations,
      productOrigin: formData.otherDetails.productOrigin,
      productBrandName: formData.otherDetails.productBrandName,
      productMidsoleCategory: formData.otherDetails.productMidsoleCategory,
      productSeason: formData.otherDetails.productSeason,
      productGender: formData.otherDetails.productGender,
      productSupplyAbility: formData.otherDetails.productSupplyAbility,
      category_id: formData.category_id,  // Ensure category_id is included
      merchant_id: merchantData.id,  // Use merchantData.id for merchant_id
    };

    try {
      const response = await fetch('http://ecommerce.reworkstaging.name.ng/v2/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage('Product created successfully!');
        console.log('Product creation response:', data);

        navigate('/pages/ShowProductPage');
      } else {
        const errorData = await response.json();
        setResponseMessage(`Failed to create product: ${errorData.msg || 'Please try again.'}`);
        console.log('Error:', errorData);
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="createPage p-8 bg-gray-100 w-[83%] ml-56 mt-6">
      <form id="createForm" onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg space-y-6">
        <h1 className="text-2xl font-bold text-center">Create your product here</h1>
        <hr />
{/* Product Name */}
<div className="space-y-1">
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productName && <p className="text-red-500">{errors.productName}</p>}
        </div>

        {/* Product Description */}
        <div className="space-y-1">
          <input
            type="text"
            id="productDescp"
            placeholder="Enter product description"
            value={formData.productDescp}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productDescp && <p className="text-red-500">{errors.productDescp}</p>}
        </div>

        {/* Product Price */}
        <div className="space-y-1">
          <input
            type="number"
            id="productPrice"
            placeholder="Enter product price"
            value={formData.productPrice}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productPrice && <p className="text-red-500">{errors.productPrice}</p>}
        </div>


        {/* Brand Name */}
        <div className="space-y-1">
          <input
            type="text"
            id="brandName"
            placeholder="Enter product brand"
            value={formData.brandName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.brandName && <p className="text-red-500">{errors.brandName}</p>}
        </div>

        {/* Product Quantity */}
        <div className="space-y-1">
          <input
            type="number"
            id="productQuantity"
            placeholder="Enter product quantity"
            value={formData.productQuantity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productQuantity && <p className="text-red-500">{errors.productQuantity}</p>}
        </div>

        {/* Product Image */}
        <div className="space-y-1">
          <label className="block font-medium">Choose your product's image</label>
          <input
            type="text"
            id="productImage"
            placeholder="Image URL"
            value={formData.productImage}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productImage && <p className="text-red-500">{errors.productImage}</p>}
        </div>

        {/* Product Currency */}
        <div className="flex gap-8 items-center">
          <label className="font-medium">Choose your product's currency</label>
          <div className="flex items-center gap-2">
            <span>Naira</span>
            <input
              type="radio"
              name="productCurrency"
              id="productCurrencyNaira"
              checked={formData.productCurrency === 'Naira'}
              onChange={() => setFormData({ ...formData, productCurrency: 'Naira' })}
              className="rounded border-gray-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <span>Dollars</span>
            <input
              type="radio"
              name="productCurrency"
              id="productCurrencyDollars"
              checked={formData.productCurrency === 'Dollars'}
              onChange={() => setFormData({ ...formData, productCurrency: 'Dollars' })}
              className="rounded border-gray-300"
            />
          </div>
        </div>
        {errors.productCurrency && <p className="text-red-500">{errors.productCurrency}</p>}

        {/* Product Min Quantity */}
        <div className="space-y-1">
          <input
            type="number"
            id="productMinQuantity"
            placeholder="Enter product minimum quantity"
            value={formData.productMinQuantity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productMinQuantity && <p className="text-red-500">{errors.productMinQuantity}</p>}
        </div>

        {/* Product Max Quantity */}
        <div className="space-y-1">
          <input
            type="number"
            id="productMaxQuantity"
            placeholder="Enter product maximum quantity"
            value={formData.productMaxQuantity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
          />
          {errors.productMaxQuantity && <p className="text-red-500">{errors.productMaxQuantity}</p>}
        </div>

        {/* Refund Checkbox */}
        <div className="flex items-center gap-2">
          <label>Refund available</label>
          <input
            type="checkbox"
            id="productRefund"
            checked={formData.productRefund}
            onChange={handleChange}
            className="rounded border-gray-300"
          />
        </div>

        {/* Discount Checkbox */}
        <div className="flex items-center gap-2">
          <label>Discount available</label>
          <input
            type="checkbox"
            id="productDiscountAvailable"
            checked={formData.productDiscountAvailable}
            onChange={handleChange}
            className="rounded border-gray-300"
          />
        </div>

        {/* Shipping Checkbox */}
        <div className="flex items-center gap-2">
          <label>Shipping available</label>
          <input
            type="checkbox"
            id="productShipping"
            checked={formData.productShipping}
            onChange={handleChange}
            className="rounded border-gray-300"
          />
        </div>

        {/* Shipping Locations */}
        <div className="space-y-2">
          <label className="font-medium">Shipping locations</label>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span>Nigeria</span>
              <input
                type="checkbox"
                checked={formData.shippingLocations.nigeria}
                onChange={() => handleLocationChange('nigeria')}
                className="rounded border-gray-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>Ghana</span>
              <input
                type="checkbox"
                checked={formData.shippingLocations.ghana}
                onChange={() => handleLocationChange('ghana')}
                className="rounded border-gray-300"
              />
            </div>
            <div className="flex items-center gap-2">
              <span>South Africa</span>
              <input
                type="checkbox"
                checked={formData.shippingLocations.southAfrica}
                onChange={() => handleLocationChange('southAfrica')}
                className="rounded border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Other Details */}
        <div className="space-y-2">
          <label className="font-medium">Other Details</label>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Place of Origin"
              value={formData.otherDetails.productOrigin}
              onChange={(e) =>
                setFormData({ ...formData, otherDetails: { ...formData.otherDetails, productOrigin: e.target.value } })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Brand Name"
              value={formData.otherDetails.productBrandName}
              onChange={(e) =>
                setFormData({ ...formData, otherDetails: { ...formData.otherDetails, productBrandName: e.target.value } })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Midsole Category"
              value={formData.otherDetails.productMidsoleCategory}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  otherDetails: { ...formData.otherDetails, productMidsoleCategory: e.target.value },
                })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Season"
              value={formData.otherDetails.productSeason}
              onChange={(e) =>
                setFormData({ ...formData, otherDetails: { ...formData.otherDetails, productSeason: e.target.value } })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Gender"
              value={formData.otherDetails.productGender}
              onChange={(e) =>
                setFormData({ ...formData, otherDetails: { ...formData.otherDetails, productGender: e.target.value } })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Supply Ability"
              value={formData.otherDetails.productSupplyAbility}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  otherDetails: { ...formData.otherDetails, productSupplyAbility: e.target.value },
                })
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>
        </div>
        
        {/* Category ID (dynamically generated) */}
        <div className="space-y-1">
          <input
            type="text"
            id="category_id"
            value={formData.category_id}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            disabled
          />
          {errors.category_id && <p className="text-red-500">{errors.category_id}</p>}
        </div>

         {/* Merchant ID */}
         <div className="space-y-1">
          <input
            type="text"
            id="currentMerchantID"
            value={merchantData ? `${merchantData.first_name} ${merchantData.last_name}` : 'No merchant data'}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            disabled
          />
          {errors.currentMerchantID && <p className="text-red-500">{errors.currentMerchantID}</p>}
        </div>

        <button
          type="submit"
          className="w-40 py-2 mt-4 text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:outline-none focus:ring focus:ring-yellow-500"
        >
          Submit
        </button>

        {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default CreateProductPage;
