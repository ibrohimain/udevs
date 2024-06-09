import React from 'react'
import './design.css'
import { UXdata } from './designUX'
import figma from './desigin_image/figma.svg'
import sketch from './desigin_image/sketch.svg'
import ai from './desigin_image/AI.svg'
import phone from './desigin_image/PHONE.png'


const Desigin = () => {
    return (
        <div className='w-[85%] h-[750px] mx-auto '>
            <h2 className='text-[62px] font-semibold text-blue-700 mt-[60px]'>UI / UX design</h2>
            <div className='flex items-center w-[100%] h-[90%]'>
                <div className='w-[50%] h-[100%]'>
                    <p className='text-[24px] w-[420px] mt-[50px]'>Our company takes a human-centered approach to design</p>
                    <ul className='flex flex-wrap gap-2 mt-[40px]'>
                        {UXdata.map((item, index) => (
                            <li key={index} className='w-[160px] h-[120px] rounded-[8px] bg-[#e8e8fc]'>
                                <img src={item.image_url} alt="" className='mt-[10px] ml-[10px]' />
                                <p className='font-semibold mt-[15px] ml-[10px] text-[18px]'>{item.common_name}</p>
                            </li>
                        ))}
                    </ul>
                    <h2 className='text-[34px] font-semibold text-[#464646] mt-[40px]'>Technologies</h2>
                    <ul className='flex items-center gap-10 mt-[10px]'>
                        <li>
                            <img src={figma} alt="" />
                            <p className='text-[18px] font-semibold'>Figma</p>
                        </li>
                        <li>
                            <img src={sketch} alt="" />
                            <p className='text-[18px] font-semibold'>Sketch</p>
                        </li>
                        <li>
                            <img src={ai} alt="" />
                            <p className='text-[18px] font-semibold'>Illustrator
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='w-[50%] h-[80%] designBG flex items-center justify-center'>
                        <img src={phone} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Desigin
