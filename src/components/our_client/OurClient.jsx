import React from 'react';
import Marquee from 'react-fast-marquee';
import akfa from './our_img/akfa.svg';
import delever from './our_img/delever.svg';
import fonnon from './our_img/fonnon.svg';
import hamkorbank from './our_img/hamkorbank.svg';
import iman from './our_img/iman.svg';
import space from './our_img/space.svg';
import godzone from './our_img/goodzone.svg';
import maxtrack from './our_img/maxtrack.svg';
import mytaxi from './our_img/myTaxi.svg';
import shefburger from './our_img/shefburger.svg';
import smsuz from './our_img/smsuz.svg';

const OurClient = () => {
    return (
        <div className='w-[100%] h-[600px]'>
            <div className='w-[85%] mx-auto'>
                <h2 className='text-[80px] text-blue-700 font-semibold'>Our clients</h2>
            </div>
            <Marquee direction="left" speed={20}> {/* Adjust speed here */}
                <div className='flex gap-2' >
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={iman} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={space} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={akfa} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={hamkorbank} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={fonnon} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={delever} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={akfa} alt="" /></div>
                </div>
            </Marquee>
            <Marquee className='mt-[50px]' direction="right" speed={20}> {/* Adjust speed here */}
                <div className='flex gap-2' >
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={godzone} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={space} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={iman} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={maxtrack} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={mytaxi} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={shefburger} alt="" /></div>
                    <div className='w-[230px] rounded-[25px] shadow h-[140px] ml-[20px]'><img className='w-[100%] h-[100%]' src={smsuz} alt="" /></div>
                </div>
            </Marquee>
        </div>
    );
};

export default OurClient;
