// import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalContext';
import img3 from '../img/2670948-847__1.webp'
import img4 from '../img/9465800-847__3.webp'
import img5 from '../img/d-24w01107-banner-membership.jpg'
import img6 from '../img/d-24w01107-banner-renew-membership.jpg'
import { useNavigate } from 'react-router-dom';

const Feature = () => {
  // const { products } = useContext(GlobalContext);
  const navigate = useNavigate();

  const products = [
    { id: 1, price: '$169.99', name: 'WOOD SHED', img: img3 },
    // { id: 2, price: '$700 OFF', name: '48 INCH OLED', img: img4 },
    // Add more products as needed
  ];


  return (
    <>
    <div className="product-grid container grid grid-cols-4 w-full mx-auto py-4 gap-6">
      
    <div className='product-item'>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'>
              <p>{product.price}</p>
            </div>
            <img
              src={product.img}
              alt={product.name}
              onClick={() => navigate('/ProductPage', { state: { selectedProduct: product } })}
            />
            <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'>
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$700 OFF</p></div>
        <img src={img4} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>48 INCH OLED</p></div>
        </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$999.99</p></div>
        <img src={img3} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>WOOD SHED</p></div>
        </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$450 OFF</p></div>
        <img src={img4} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>48 INCH OLED</p></div>
        </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$169.99</p></div>
        <img src={img3} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>WOOD SHED</p></div>
        </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$450 OFF</p></div>
        <img src={img4} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>48 INCH OLED</p></div>
        </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$169.99</p></div>
        <img src={img4} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>48 INCH OLED</p></div>
        </div>
        <div className="product-item">
        <div className='flex justify-center items-center bg-gradient-to-b from-slate-300 via-slate-200 to-slate-100 rounded-tr-lg rounded-tl-lg font-bold'><p>$450 OFF</p></div>
        <img src={img3} alt="" />
        <div className='flex justify-center items-center bg-gradient-to-t from-slate-300 via-slate-200 to-slate-100 rounded-br-lg rounded-bl-lg font-bold'><p>WOOD SHED</p></div>
        </div>
  
    </div>
    <div className='grid grid-cols-2 gap-6'>
        <div className='flex rounded-lg'>
          <img src={img5} alt="" />
        </div>
        <div className='flex rounded-lg'>
          <img src={img6} alt="" />
        </div>
      </div>

    </>
    
  
  );
};

export default Feature;


