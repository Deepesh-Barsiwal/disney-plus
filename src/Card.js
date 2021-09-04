import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Card = (props) => {
    return (
        <>
                 <div className="card m-4" style={{width:`18rem`}}>
       <img src ={props.img}/>
       </div>
             
        </>
    )
}

export default Card
