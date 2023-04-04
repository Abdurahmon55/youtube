
import { useState } from 'react'
import { AiOutlineSearch } from '../data/Icons'
function Search() {
  return (
    <form  className='relative'>
        <input  className='border rounded-l-lg mr-10 w-80' type="text"  />
        <button className='absolute right-0  top-0 px-3 text-sm bg-slate-200 rounded-r-md border-1  h-full'><AiOutlineSearch/></button>
    </form>
  )
}

export default Search