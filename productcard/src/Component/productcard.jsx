import React from 'react'
import './productcard.css'; 
function productcard (props){
  return ( 
  
    <div className="product-card">
    <div className="product-info">
        <h2 className="name">Camera Name: {props.name}</h2>
        <p className="description">Description: {props.description}</p>
        <p className="price">Price: ${props.price}</p>
        <p className="design">Camera Design:
        <img  className="design-image" src='camera.jpg'alt="Camera Design:"/>
        </p>
    </div>
</div>
  )
}

export default productcard;