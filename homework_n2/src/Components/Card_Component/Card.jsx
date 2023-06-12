import React from 'react'
import './Card.css';


export default function Card(props) {
  
  return (
    
    <div>
      
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
        <img src={props.image} alt="" />
    </div>
  )
}
