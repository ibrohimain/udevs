import React from 'react'
import user from './our_services_img/users.svg'
import phone from './our_services_img/phone.svg'
import line from './our_services_img/line.svg'
import copy from './our_services_img/copy.svg'
import build from './our_services_img/build.svg'
import tv from './our_services_img/tv.svg'
import { ourData } from './ourData'

const OurSevices = () => {
  return (
    <div className='w-[85%] h-[550px] mx-auto'>
      <h2 className='text-[80px] text-blue-600 font-semibold'>Our Services</h2>
      <div className='w-[100%] h-[95%] mt-[50px]'>
        <ul className='w-[100%] h-[100%] flex justify-between flex-wrap'>
          {ourData.map((item, index) => (
            <li key={index}  className='w-[400px] h-[220px]  bg-[rgb(224,233,255,0.3)] rounded-[10px]'>
              <img src={item.image_url} alt="" className='mt-[50px] ml-[30px]'/>
              <p className='text-[20px] font-semibold w-[200px] mt-[30px] ml-[30px]'>{item.common_name}</p>
            </li>
          ))

          }

        </ul>
      </div>
    </div>
  )
}

export default OurSevices
