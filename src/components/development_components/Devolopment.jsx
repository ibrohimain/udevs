import React from 'react'
import './devolopment.css'
import IOS from './developmment1-img/ios.svg'
import android from './developmment1-img/android.svg'
import phons from './developmment1-img/phons.svg'
import swift from './developmment1-img/swift.svg'
import kotline from './developmment1-img/kotline.svg'
import fulluter from './developmment1-img/fulluter.svg'
import twoPhone from './developmment1-img/two-phone.png'

const Devolopment = () => {
    return (
        <div className='w-[85%] h-[820px] mx-auto mt-[40px]'>
            <div className='text-[74px] text-blue-700 w-[900px] font-semibold leading-[90px]'>Development of mobile applications</div>
            <div className='w-[100%] h-auto flex mt-[50px]'>
                <div className='w-[50%] h-[90%]'>
                    <p className='w-[500px] text-[28px]'>In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.</p>
                    <ul className='flex gap-3 mt-[50px]'>
                        <li className='w-[150px] h-[150px] rounded-[10px] bg-[#f7f7ff]'>
                            <img src={IOS} alt="" className='mt-[20px] ml-[10px]' />
                            <p className='text-[18px] font-semibold ml-[15px] mt-[20px]'>IOS</p>
                        </li>
                        <li className='w-[150px] h-[150px] rounded-[10px] bg-[#f7f7ff]'>
                            <img src={android} alt="" className='mt-[20px] ml-[10px]' />
                            <p className='text-[18px] font-semibold ml-[10px] mt-[20px]'>Android</p>
                        </li>
                        <li className='w-[150px] h-[150px] rounded-[10px] bg-[#f7f7ff]'>
                            <img src={phons} alt="" className='mt-[20px] ml-[10px]' />
                            <p className='text-[18px] font-semibold ml-[10px] mt-[20px]'>Crossplatform</p>
                        </li>
                    </ul>
                    <h2 className='text-[30px] font-semibold text-[#504f4f] mt-[50px]'>Technalogies</h2>
                    <ul className='flex gap-2 mt-[30px]'>
                        <li className='w-[100px] h-[120px]'><img src={swift} alt="" /><p className='text-[18px] font-semibold mt-[10px]'>Swift</p></li>
                        <li className='w-[100px] h-[120px]'><img src={kotline} alt="" /><p className='text-[18px] font-semibold mt-[10px]'>Kotline</p></li>
                        <li className='w-[100px] h-[120px]'><img src={fulluter} alt="" /><p className='text-[18px] font-semibold mt-[10px]'>Flutter</p></li>
                    </ul>
                </div>
                <div className='w-[50%] h-[580px] twoBox flex items-center justify-center'>
                    <img src={twoPhone} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Devolopment
