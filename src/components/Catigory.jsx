import React from 'react'
import { useParams } from 'react-router-dom'
import { cardInfo } from '../data/Icons'
import Card from './Card'

function Catigory() {
    const { catigory } = useParams()
    const cat = cardInfo.filter(item => item.catigory === catigory)
    const { yourInfo } = useParams()
    const your = cardInfo.filter(item => item.yourInfo=== yourInfo)
    const { imgBlog } = useParams()
    const blogMenue = cardInfo.filter(item => item.imgBlog===imgBlog)
    return (
        <div className='flex flex-wrap justify-between'>
            {cat.map((item)=>(
                <Card key={item.id}{...item}/>
            ))}
            {your.map((item)=>(
                <Card key={item.id}{...item}/>
            ))}
            {blogMenue.map((item)=>(
                <Card key={item.id}{...item}/>
            ))}
</div>
    )
}

export default Catigory