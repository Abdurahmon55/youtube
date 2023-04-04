import React  from 'react'
import { useNavigate } from 'react-router-dom'
function MinNavbar({ name,catigory }) {
const naviget=useNavigate()
const catigorya=()=>{
    naviget(`catigory/${catigory}`)
}
catigory=name
  return (
        <h5 onClick={catigorya} className='bg-gray-200 p-2 px-2 cursor-pointer rounded-md mx-4 hover:bg-slate-500 '>{name}</h5>
  )
}

export default MinNavbar