import React from "react";

export default function Nav(){
    return (
        <div className="img-nav">
            <div className="img-photo-1">
                <img src="./images/airbnb-logo.png" alt="the cow" />
            </div>
            <div className="img-photo-2">
                <img src="./images/photo-grid.png" alt="the momo"/>
            </div>
            <div className="nav-content">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}