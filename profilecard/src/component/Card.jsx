
import React from 'react';
import './Card.css';  

function Greeting(props) {
    return (
        <div className="profile-card">
            <div className="profile-info">
                <h2 className="name">My Name:{props.name}</h2>
                <p className="age">Age: {props.age}</p>
                <p className="occupation">Occupation: {props.Occupation}</p>
                <p className="location">Location: {props.Location}</p>
            </div>
        </div>
    )
}
export default Greeting;
