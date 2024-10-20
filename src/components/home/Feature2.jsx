
import React from 'react'
// import { GlobalContext } from '../context/GlobalContext'
import img from '../img/24w09059_5_across_wsl.jpg'
import img2 from '../img/24w09059_5_across_whats_new.jpg'
import img3 from '../img/costco-direct-header-desktop-v2.png'
import img4 from '../img/costco-direct-vector-badge.png'
import img5 from '../img/costco-direct-four-items.png'
import img6 from '../img/costco-direct-five-items.png'
import img7 from '../img/25w01163_half_hero_4_square_lg_fall_savings.jpg'
import img8 from '../img/25w01163_half_4_square_lg_fall_savings_cooking.jpg'
import img9 from '../img/25w01163_half_4_square_lg_fall_savings_washer.jpg'
import img10 from '../img/25w13223_october_mvm_bind_in_grid_cover (1).jpg'
import img11 from '../img/25w13223_october_mvm_bind_in_grid_lysol_finish.jpg'
import img12 from '../img/25w13223_october_mvm_bind_in_grid_puma.jpg'
import img13 from '../img/25w13223_october_mvm_bind_in_grid_pantene_olay.jpg'
import img14 from '../img/25w13223_october_mvm_bind_in_grid_whats_new.jpg'
import img15 from '../img/www3-media.webp'
import img16 from '../img/m_24w13043_ban_p&g_100_campaign.jpg'
import img17 from '../img/24w13127_third_banner_invisalign.jpg'
import { Link } from 'react-router-dom'
const Feature2 = () => {
    // const { products2 } = useContext(GlobalContext);


    return (
        <>
            <div className='grid grid-cols-4'>
                <img src={img} alt="" />
                <img src={img2} alt="" />
                <img src={img} alt="" />
                <img src={img2} alt="" />
            </div>
            <div className='grid grid-cols-2 bg-slate-100 px-8 py-8 border mx-5 mt-4'>
                <div>
                    <img className='w-[50%] justify-center items- ml-28' src={img3} alt="" />
                </div>
                <div className='-ml-10'>
                    <h2 className='font-semibold text-4xl'>Benefit from Buying More</h2>
                    <h3 className='font-semibold'>Combine with other promotions for additional savings!</h3>
                    <p>Delivery in 3-5 Days in Most Areas*</p>
                    <div className='flex'>
                        <p className='font-semibold'>Participating items are marked with </p><img src={img4} alt="" />
                    </div>

                </div>

            </div>
            <div className='flex bg-blue-800 mx-5 py-4'>
                <div className='flex ml-3'>
                    <img className='w-[20%]' src="https://mobilecontent.costco.com/staging/resource/img/24w05146/24w05146-img-buy-2.svg" alt="" /> <h2 className='flex justify-center items-center ml-4 text-white font-bold text-2xl'>SAVE $100</h2>
                </div>
                <div className='flex'>
                    <img className='w-[20%]' src="https://mobilecontent.costco.com/staging/resource/img/24w05146/24w05146-img-buy-3.svg" alt="" /> <h2 className='flex justify-center items-center ml-4 text-white font-bold text-2xl'>SAVE $200</h2>
                </div>
                <div className='flex'>
                    <img className='w-[20%]' src="https://mobilecontent.costco.com/staging/resource/img/24w05146/24w05146-img-buy-4.svg" alt="" /> <h2 className='flex justify-center items-center ml-4 text-white font-bold text-2xl'>SAVE $300</h2>
                </div>
                <div className='flex'>
                    <img className='w-[20%]' src="https://mobilecontent.costco.com/staging/resource/img/24w05146/24w05146-img-buy-5.svg" alt="" /> <h2 className='flex justify-center items-center ml-4 text-white font-bold text-2xl'>SAVE $400</h2>
                </div>


            </div>
            <div className='grid grid-cols-4 border px-4 mx-5'>
               <Link to="/ShopPage"> <img src={img5} alt="" /> </Link>
                <img src={img6} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />

            </div>
            <div className='bg-slate-700 text-white rounded-br-lg rounded-bl-lg flex justify-center items-center py-1'>
                <h2 className='text-sm'>ONLINE ONLY | LIMIT 2 REDEMPTION PER MEMBERSHIP| * SEE ITEM PAGE FOR DETAILS</h2>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {/* <div className='grid grid-cols-2'> */}
                <div className=' flex flex-col justify-center items-center -mt-10 '>
                    <h2 className='flex bg-red-800 text-white rounded-lg font-bold text-2xl w-full justify-center items-center' >LG Appliances</h2>
                    <img className='mt-5' src={img7} alt="" />
                    <h2 className='flex bg-red-800 text-white rounded-bl-lg rounded-br-lg font-bold text-sm w-full justify-center items-center' >Valid 9/26/24- 10/16/24| WHILE SUPPLIES LAST</h2>
                    <span className='flex mt-4 bg-red-800 text-white rounded-lg font-bold text-2xl justify-center items-center py-2 px-10'>SHOP NOW</span>
                </div>
                <div className='grid grid-cols-2 gap-4 -mb-1 my-4 py-10'>
                    <div className='grid grid-rows-2 gap-4'>
                        <div>
                            <img src={img8} alt="" />
                            <h2 className='flex bg-red-800 text-white rounded-bl-lg rounded-br-lg font-bold text-sm w-full justify-center items-center' >COOKING</h2>
                        </div>
                        <div>
                            <img src={img9} alt="" />
                            <h2 className='flex bg-red-800 text-white rounded-bl-lg rounded-br-lg font-bold text-sm w-full justify-center items-center' >LAUNDRY</h2>
                        </div>

                    </div>
                    <div className='grid grid-rows-2 gap-4'>
                    <div>
                            <img src={img9} alt="" />
                            <h2 className='flex bg-red-800 text-white rounded-bl-lg rounded-br-lg font-bold text-sm w-full justify-center items-center' >LAUNDRY</h2>
                        </div>
                        <div>
                            <img src={img8} alt="" />
                            <h2 className='flex bg-red-800 text-white rounded-bl-lg rounded-br-lg font-bold text-sm w-full justify-center items-center' >COOKING</h2>
                        </div>

                    </div>

                </div>
                {/* </div> */}
                <div>

                </div>

            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div>
                    <img src={img10} alt="" />
                </div>
                <div>
                    <img src={img11} alt="" />
                </div>
                <div>
                    <img src={img12} alt="" />
                </div>
                <div>
                    <img src={img13} alt="" />
                </div>
                <div>
                    <img src={img14} alt="" />
                </div>
                <div>
                    <img src={img13} alt="" />
                </div>
                <div>
                    <img src={img11} alt="" />
                </div>
                <div>
                    <img src={img12} alt="" />
                </div>

            </div>
                <div className='grid grid-cols-3'>

                </div>
        </>
    )
}

export default Feature2
