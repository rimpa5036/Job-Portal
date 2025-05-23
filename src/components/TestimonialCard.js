import React from 'react'
import "../styles/TestimonialCard.css"
import Coma from "../images/close.png";

export default function TestimonialCard(props) {
  return (
    <div className='testimonial-container'>
        <div style={{position: 'relative'}}>
            <img src={props.imgClient} alt='client'></img>
            <img src={Coma} alt='coma' className='imgComa'></img>
        </div>
        <div className='testimonial-clientname'>{props.clientname}</div>
        <div className='testimonial-designation'>{props.designation}</div>
        <div className='testimonial-review'>"{props.review}"</div>
        <div className='testimonial-review'>Job Hunt changed my life!</div>
    </div>
  )
}
