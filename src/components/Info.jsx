import React from 'react'
import { BiVideoPlus, TbBellRinging } from '../data/Icons'
function Info() {
    return (
        <div className='flex justify-around items-center w-32 '>
            <button><BiVideoPlus /></button>
            <div className='relative'>
                <h5 className='absolute  bottom-3 left-2 font-bold border w-6 text-center rounded-full text-[8px] p-[2px] bg-red-700 text-white'>9+</h5>
                <button ><TbBellRinging /></button>
            </div>
            <button className='rounded-full border  w-6 bg-sky-500/100 text-center'>a</button>
        </div>
    )
}

export default Info