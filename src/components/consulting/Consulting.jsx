import React from 'react'
import frontend from './consulting_img/frontend.svg'
import backent from './consulting_img/backent.svg'
import neleka from './consulting_img/neleka.svg'
import cheksiz from './consulting_img/cheksiz.svg'
import copy from './consulting_img/copy.svg'
import qa from './consulting_img/qa.svg'
import statistik from './consulting_img/statictik.svg'

const Consulting = () => {
    return (
        <div className='w-[85%] h-[600px] mx-auto'>
            <div className='w-[100%] h-[150px]'>
                <h2 className='text-[80px] font-semibold text-blue-700'>IT consulting</h2>
            </div>
            <div className='w-[100%] h-[450px] flex justify-between'>
                <div className='w-[45%] h-[100%]'>
                    <p className='w-[400px] text-[24px]'>We can improve the qualifications of your employees thereby increasing the efficiency of your company</p>
                    <ul className='flex flex-wrap gap-3 mt-[40px]'>
                        <li className='w-[150px] h-[120px] border rounded-[8px] bg-blue-100'><img className='mt-[10px] ml-[10px]' src={frontend} alt="" /><p className='text-[18px] font-semibold ml-[10px] mt-[10px]'>Frontend</p></li>
                        <li className='w-[150px] h-[120px] border rounded-[8px] bg-blue-100'><img className='mt-[10px] ml-[10px]' src={backent} alt="" /><p className='text-[18px] font-semibold ml-[10px] mt-[10px]'>Backend</p></li>
                        <li className='w-[150px] h-[120px] border rounded-[8px] bg-blue-100'><img className='mt-[10px] ml-[10px]' src={neleka} alt="" /><p className='text-[18px] font-semibold ml-[10px] mt-[10px]'>Architecture</p></li>
                        <li className='w-[150px] h-[120px] border rounded-[8px] bg-blue-100'><img className='mt-[10px] ml-[10px]' src={cheksiz} alt="" /><p className='text-[18px] font-semibold ml-[10px] mt-[10px]'>DevOps</p></li>
                        <li className='w-[150px] h-[120px] border rounded-[8px] bg-blue-100'><img className='mt-[10px] ml-[10px]' src={copy} alt="" /><p className='text-[18px] font-semibold ml-[10px] mt-[10px]'>UX/UI</p></li>
                        <li className='w-[150px] h-[120px] border rounded-[8px] bg-blue-100'><img className='mt-[10px] ml-[10px]' src={qa} alt="" /><p className='text-[18px] font-semibold ml-[10px] mt-[10px]'>QA</p></li>
                    </ul>
                </div>
                <div className='w-[45%] h-[100%] flex justify-center items-center'>
                    <img src={statistik} alt="" className='h-[300px]'/>
                </div>
            </div>
        </div>
    )
}

export default Consulting
