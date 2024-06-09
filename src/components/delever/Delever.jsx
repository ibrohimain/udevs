import React from 'react'
import { FaTruckFast } from 'react-icons/fa6'
import './delever.css'
import yer from './delever_image/yer.svg'
import admin from './delever_image/adminpanel.svg'
import phone from './delever_image/phone.svg'
import comp from './delever_image/comp.svg'
import miniphone from './delever_image/miniphone.svg'

const Delever = () => {
    return (
        <div className='w-[85%] h-[700px]  mx-auto flex items-center'>
            <div className='w-[50%] h-[100%] flex items-center justify-start'>
                <div className='delever_bg w-[95%] h-[75%]'>

                </div>
            </div>
            <div className='w-[50%] h-[90%]'>
                <h2 className='text-[80px] font-bold text-[#f4614a]'>Delever</h2>
                <div className='w-[130px] h-[40px] rounded-[20px] bg-[rgb(244,97,74,0.3)] flex items-center justify-center gap-3'>
                    <FaTruckFast className='text-[#f4614a] text-[22px]' />
                    <p className='text-[#f4614a] font-semibold'>Delivery</p>
                </div>
                <p className='text-[20px] mt-[50px]'>Delever - Delivery service automation targeted at both consumers and restaurants.</p>
                <h2 className='text-[26px] font-semibold mt-[26px] text-[#474747]'>What we did?</h2>
                <ul className='flex flex-wrap gap-4 mt-[20px] '>
                    <li className='w-[180px] h-[140px] border rounded-[10px] bg-[#a8bfff]'><img className='mt-[10px] ml-[10px]' src={yer} alt="" /><p className='ml-[10px] mt-[15px] text-[18px] font-semibold'>Website</p></li>
                    <li className='w-[180px] h-[140px] border rounded-[10px] bg-[#a8bfff]'><img className='mt-[10px] ml-[10px]' src={admin} alt="" /><p className='ml-[10px] mt-[15px] text-[18px] font-semibold'>Admin Panel</p></li>
                    <li className='w-[180px] h-[140px] border rounded-[10px] bg-[#a8bfff]'><img className='mt-[10px] ml-[10px]' src={phone} alt="" /><p className='ml-[10px] mt-[15px] text-[18px] font-semibold'>Crossplatform </p></li>
                    <li className='w-[180px] h-[140px] border rounded-[10px] bg-[#a8bfff]'><img className='mt-[10px] ml-[10px]' src={comp} alt="" /><p className='ml-[10px] mt-[15px] text-[18px] font-semibold'>Web Design</p></li>
                    <li className='w-[180px] h-[140px] border rounded-[10px] bg-[#a8bfff]'><img className='mt-[10px] ml-[10px]' src={miniphone} alt="" /><p className='ml-[10px] mt-[15px] text-[18px] font-semibold'>Mobile Design</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Delever
