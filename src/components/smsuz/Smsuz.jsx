import { Email } from '@mui/icons-material'
import React from 'react'
import website from './smsuz_image/phone.svg'
import panel from './smsuz_image/panel.svg'
import yer from './smsuz_image/yer.svg'
import smsuzbg from './smsuz_image/smsuz_bg.png'

const Smsuz = () => {
  return (
    <div className='w-[85%] h-[650px] mx-auto mt-[40px] flex'>
        <div className='w-[50%] h-[100%]'>
            <h2 className='text-[70px] font-bold text-blue-700'>Smsuz.uz</h2>
            <div className='flex mt-[40px] items-center justify-center gap-1 text-blue-500 w-[140px] h-[40px] bg-blue-100 rounded-[20px]'><Email className='text-blue-500'/> Notification</div>
            <p className='text-[20px] font-semibold text-[#4b4b4b] mt-[40px]'>Smsuz.uz - It is a platform for bulk SMS messaging.</p>
            <h2 className='text-[26px] font-semibold mt-[30px]'>What we did?</h2>
            <ul className='flex gap-3 mt-[40px]'>
                <li className='w-[170px] h-[120px] border bg-blue-50 rounded-[10px]'><img className='mt-[10px] ml-[10px]' src={yer} alt="" /><p className='font-semibold mt-[10px] ml-[10px]'>Website</p></li>
                <li className='w-[170px] h-[120px] border bg-blue-50 rounded-[10px]'><img className='mt-[10px] ml-[10px]' src={panel} alt="" /><p className='font-semibold mt-[10px] ml-[10px]'>Admin Panel</p></li>
                <li className='w-[170px] h-[120px] border bg-blue-50 rounded-[10px]'><img className='mt-[10px] ml-[10px]' src={website} alt="" /><p className='font-semibold mt-[10px] ml-[10px]'>Crossplatform</p></li>
            </ul>
        </div>
        <div className='w-[50%] h-[90%] flex items-center'>
            <img src={smsuzbg} alt="" className='rounded-[30px]'/>
        </div>
    </div>
  )
}

export default Smsuz
