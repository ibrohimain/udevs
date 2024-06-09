import React from 'react'
import './erpe.css'
import { erpe } from './erpe'
import mac from './erpe_image/macbook.png'

const Erpe = () => {
    return (
        <div className='w-[100%] h-[600px] border bg-[#f5f5ff] mt-[80px]  '>
            <div className='w-[85%] h-[100%] mx-auto'>
                <h2 className='w-[100%] h-[100px] text-[70px] font-semibold text-blue-700'>ERP systems</h2>
                <div className='w-[100%] h-[500px] flex justify-between mt-[10px] '>
                    <div className='w-[50%] h-[90%] erpeBG flex items-center justify-center'>
                        <img src={mac} alt="" className='w-[600px]'/>
                    </div>
                    <div className='w-[45%] h-[100%] flex flex-col items-center'>
                        <p className='text-[22px] font-normal w-[420px]'>IT Systems of any level of complexity at a convenient time for you</p>
                        <ul className='flex flex-wrap justify-end gap-3 mt-[50px]'>
                            {erpe.map((item, index) => (
                                <li className='w-[160px] h-[120px] rounded-[10px] bg-[#dbe5ff] border'>
                                    <img src={item.image_url} alt=""  className='mt-[15px] ml-[10px]'/>
                                    <p className='font-semibold text-[18px] mt-[10px] ml-[10px]'>{item.common_name}</p>
                                </li>
                            ))

                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Erpe
