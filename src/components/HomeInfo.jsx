import React from 'react'

function HomeInfo({icon,name}) {
  return (
        <div className='w-full flex py-2 hover:bg-gray-200 hover:rounded-md '>
            <button className=''>{icon}</button>
            <h4 className='pl-4 font-normal'>{name}</h4>
        </div>
  )
}

export default HomeInfo