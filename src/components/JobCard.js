import React from 'react'
import "../styles/JobCard.css"

export default function JobCard(props) {
  return (
    <div className='jobcard-box'>
        <div className='jobcard-info'>
            <div className='jobcard-icon'>
                <img src={props.imgIcon}></img>
            </div>
            <div className='jobcard-content'>
                <div className='jobcard-title-section'>
                    <div className='jobcard-serailno'>{props.no}</div>
                </div>
                <div className='jobcard-title'>{props.title}</div>
            </div>
        </div>
    </div>
  )
}
