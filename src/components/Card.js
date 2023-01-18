import React from "react";

export default function Card(props) {
    let tag;
    if(props.batchcount === 0){
        tag = "Sold Out"
    }
    else{
        tag = "Online"
    }

    return (
            <div className="card">
                {tag && <section className='tag'>{tag}</section>}
                {/*{`./images/${props.img}`}*/}
                <img src={`./images/${props.img}`} alt="the _momo" className="card-img"></img>
                <div className="card-stats">
                    <img src="./images/star.png" alt="the _momo"></img>
                    <span>•{props.rating}•</span>
                    <span>{props.review}•</span>
                    <span>{props.country}</span>
                </div>
                <p><b>From ${props.price}</b>/person</p>
                <p className="card-title"><b>{props.title}</b></p>
            </div>
    )
}