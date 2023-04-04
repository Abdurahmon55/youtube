import React from 'react'
import { useParams } from 'react-router-dom'
import { cardInfo } from '../data/Icons'
function Product() {
    const {id}=useParams()
    const product=cardInfo.find(item=>item.id===parseInt(id))
  return (
    <div className='w-[600px]'>
      <img src={product.imageVideo} alt="" />
      <h5 className='text-md font-medium rounded-md'>{product.nameVideo}</h5>
      <div className='flex items-center justify-between'>
          <div>
        
        <div className='flex mt-4 h-10 items-center'>
            <img className='w-8 rounded-full ' src={product.imgBlog} alt="" srcset="" />
            <div className='pl-2 flex flex-col my-1'>
                <h4 className='text-sm font-medium'>{product.blogName}</h4>
                <h4 className='text-xs text-slate-600'>{product.inofVideo}</h4>
            </div>
            </div>
      </div>
      <div className='mt-3 ml-2'>
         <button className='text-white bg-black ml-4 px-4 p-1 rounded-full'>obuna</button>
      </div>
      <div className="icon flex ">
        <div className=' border rounded-full mx-4 bg-slate-200 flex text-[25px]'>
          <div className='py-1 pr-4 pl-2 flex items-center'>
             <i className=' '>{product.likeVideo}</i>
             <h5 className='text-sm font-medium'>37ming</h5>
          </div>
         
        <i className='py-1 px-2'>{product.dislike}</i>
        </div>
        <i className='px-2 py-2 border rounded-full bg-slate-200'>{product.horizontVideo}</i>
      </div>
      </div>
       
     
    </div>
  )
}

export default Product