import React from 'react'
import '../App.css';

export default function Title(props) {
  return (
    <div>
        <div>
            <div className='titleName'>{props.text}</div>
            <div className='subTitleName'>{props.subtext}</div>
        </div>
    </div>
  )
}
