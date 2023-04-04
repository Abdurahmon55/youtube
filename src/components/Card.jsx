import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card({iconVideo,imageVideo,inofVideo,nameVideo,id,imgBlog
}) {
    const naviget=useNavigate()
    const info=()=>{
        naviget(`/product/${id}`)
    }
  return (
    <div className='my-2'>
    <img onClick={info} className='w-56 rounded-lg cursor-pointer' src={imageVideo} alt=""  />
    <div>
        <div className='flex justify-between my-1'>
            <img className='w-8 h-8 mr-2 rounded-full' src={imgBlog} alt=""  />
            <div className='w-44'>
                <h5 className='text-sm  font-medium'>{nameVideo}</h5>
                <h5 className='text-xs text-slate-600'>{inofVideo}</h5>
                {/* <h5 className='text-xs text-slate-600'>{inof}</h5> */}
            </div>
            <i>{iconVideo}</i>
        </div>
    </div>
</div>
  )
}

export default Card