import React from 'react'
import './optimize.css'
import mac from './optimize_img/macbook.png'
import neleka from './optimize_img/neleka.svg'
import quyosh from './optimize_img/quyosh.svg'
import chaqmoq from './optimize_img/chaqmoq.svg'
import foiz from './optimize_img/foiz.svg'
import cheksiz from './optimize_img/cheksiz.svg'
import bulut from './optimize_img/bulut.svg'
import zanjir from './optimize_img/zanjir.svg'

const Optimaziton = () => {
    return (
        <div className='w-[100%] h-[900px] mt-[60px] bg-[#f5f5ff] '>
            <div className='w-[85%] h-[100%] mx-auto'>
                <h2 className='text-[80px] w-[500px] leading-[90px] text-blue-700 font-semibold'>Optimization Infrastructure</h2>
                <div className='w-[100%] h-[600px]  flex items-center justify-between'>
                    <div className='optimizeBG w-[40%] h-[90%] flex items-center justify-center'>
                        <img src={mac} alt="" />
                    </div>
                    <div className='w-[40%] h-[80%]'>
                        <p className='w-[500px] text-[22px]'>Our experienced professionals will help you optimize your infrastructure</p>
                        <ul className='flex flex-wrap gap-3 mt-[30px]'>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={neleka} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>Architecture</p></li>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={quyosh} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>Auto testing</p></li>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={chaqmoq} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>Stress testing</p></li>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={foiz} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>Load testing</p></li>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={cheksiz} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>Devops</p></li>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={bulut} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>Cloud</p></li>
                            <li className='w-[155px] h-[120px] rounded-[8px] border bg-blue-100'><img className='ml-[10px] mt-[10px]' src={zanjir} alt="" /><p className='font-semibold ml-[10px] mt-[10px] text-[18px]'>CI / CD</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Optimaziton
