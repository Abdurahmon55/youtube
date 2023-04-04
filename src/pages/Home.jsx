import React from 'react'
import Card from '../components/Card'
import { cardInfo } from '../data/Icons'
function Home() {
    console.log(cardInfo );
  return (
    <div className='flex flex-wrap justify-between'>
        {cardInfo.map((item,index)=>(
            <Card key={index}{...item}/> 
        ))} 
    </div>
  )
}

export default Home