import React from 'react'
import udevs from './udevs_info_components_img/UDEVS.svg'
import udevs_bg from './udevs_info_components_img/udevs_info_bg.svg'

const UdevsInfo = () => {
    return (
        <div className='w-[85%] h-[800px] mx-auto flex items-center'>
            <div className='w-[50%] h-[60%]'>
                <img src={udevs} alt="" className='w-[300px] h-[100px]'/>
                <h2 className='text-[46px] mt-[30px] font-semibold text-[#292b2f]'>IT-Outsourcing Company</h2>
                <h2 className='text-[46px] font-semibold text-blue-600'>Development and implementation ERP systems|</h2>
                <button className='w-[250px] h-[55px] mt-[70px] rounded-[10px] bg-blue-600 text-[20px] font-semibold text-white'>Contect</button>
            </div>
            <div className='w-[50%] h-[100%] flex items-center justify-end'>
                <img src={udevs_bg} alt="" />
            </div>
        </div>
    )
}

export default UdevsInfo
