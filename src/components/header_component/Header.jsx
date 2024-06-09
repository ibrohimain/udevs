import React from 'react'
import header_images from './header_images/UDEVS.svg'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Header = () => {
    return (
        <div className='w-[100%] fixed z-10 border-b-[2px] bg-white'>
            <div className='w-[85%] h-[70px] mx-auto flex justify-between'>
                <div className='w-[20%] h-[100%] flex items-center'>
                    <img src={header_images} alt="" className='w-[100px] h-[60px] cursor-pointer' />
                </div>
                <div className='w-[65%] h-[100%]'>
                    <ul className='w-[100%] h-[100%] flex items-center justify-between cursor-pointer'>
                        <li className='border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Direction</li>
                        <li className='border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Command</li>
                        <li className='flex items-center border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Services <MdKeyboardArrowDown /> </li>
                        <li className='border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Tools</li>
                        <li className='border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Clients</li>
                        <li className='flex items-center border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Portfolio <MdKeyboardArrowDown /></li>
                        <li className='flex items-center border-b-[3px] border-[white] hover:border-b-[3px] hover:border-blue-700'>Language <MdKeyboardArrowDown /></li>
                        <button className='w-[130px] h-[45px] bg-blue-700 font-semibold text-white rounded-[10px]'>Contact</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
