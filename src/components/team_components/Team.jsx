import React from 'react'
import team_bg from './team_img/bg-team.svg'

const Team = () => {
    return (
        <div className='w-[100%] h-[700px] border bg-[#f5f5ff] mt-[200px]'>
            <div className='w-[85%] h-[100%] mx-auto flex'>
                <div className='w-[50%] h-[100%]'>
                    <h2 className='text-[80px] mt-[50px] font-semibold text-blue-600'>Team</h2>
                    <p className='text-[22px] mt-[60px] text-[#4b4a4a] w-[500px]'>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
                    <h2 className='text-[100px] mt-[70px] font-semibold text-blue-700 leading-10'>100+</h2>
                    <p className='mt-[30px] text-[36px] text-[#424242] font-semibold'>Dedicated team</p>
                </div>
                <div className='w-[50%] h-[100%] flex items-center justify-end'>
                    <img src={team_bg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Team
