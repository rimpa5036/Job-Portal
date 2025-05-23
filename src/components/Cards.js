import React from 'react'
import '../styles/Cards.css'

export default function Cards(props) {
  return (
    
        <div className='card-content'>
            <div className='card-title'>{props.category}</div>
            <div className='card-position'>{props.position}</div>
            <img src={props.imgSrc} alt='' className='category-img'></img>
        </div>
    
  )
}
