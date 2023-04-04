import React from 'react'
import { useNavigate } from 'react-router-dom'

function YourInfo({ icon, name, yourInfo }) {
  const naviget = useNavigate()
  const menue = () => {
    naviget(`blog/${yourInfo}`)
  }
  yourInfo=name
  return (
    <div className='w-full flex py-2 hover:bg-gray-200 hover:rounded-md '>
      <button className=''>{icon}</button>
      <h4 onClick={menue} className='pl-4 font-normal cursor-pointer'>{name}</h4>
    </div>
  )
}

export default YourInfo