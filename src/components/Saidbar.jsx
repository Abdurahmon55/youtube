import React from 'react'
import homeIcon, { follow, yourInfo } from '../data/Icons'
import HomeInfo from './HomeInfo'
import SubSucraib from './SubSucraib'
import YourInfo from './YourInfo'

function Saidbar() {
  return (
    <div  className='w-1/3 fixed bg-white mt-16 mr-2 lg:w-80'>
        <div className='border-b-2 pb-2'>
        {homeIcon.map((item,index)=>(
            <HomeInfo key={index}{...item}/>
          ))}
        </div>
        <div className='border-b-2 py-2'>
            {yourInfo.slice(0,6).map((item,index)=>(
              <YourInfo key={index}{...item}/>
            ))}
          </div>
          {follow.slice(0,5).map((item,index)=>(
            <SubSucraib key={index}{...item}/>
          ))}
    </div>
  )
}

export default Saidbar