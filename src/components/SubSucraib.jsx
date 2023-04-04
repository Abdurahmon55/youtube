import React from 'react'
import { useNavigate } from 'react-router-dom'

function SubSucraib({ image, name, imgBlog }) {
    const naviget = useNavigate()
    const blog = () => {
        naviget(`your/${imgBlog}`)
    }
    imgBlog = image
    
    return (
        <div className='w-full flex py-2 hover:bg-gray-200 hover:rounded-md '>
            <img onClick={blog} className='w-8 rounded-full' src={image} alt="" />
            <h4 className='pl-4 font-normal '>{name}</h4>
        </div>
    )
}

export default SubSucraib