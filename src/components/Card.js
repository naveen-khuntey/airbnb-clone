import React from "react";

export default function Card(props) {
    return (
        <div className="card-cont">
            <div className="card">
                <img src="./images/card-1.jpg" alt="the _momo" className="card-img"></img>
                <div className="card-stats">
                    <img src="./images/star.png" alt="the _momo"></img>
                    <span>•{props.rating}•</span>
                    <span>{props.review}•</span>
                    <span>{props.country}</span>
                </div>
                <p><b>From ${props.price}</b>/person</p>
            </div>
            <p className="card-title">{props.title}</p>
        </div>
    )
}