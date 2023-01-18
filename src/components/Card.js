import React from "react";

export default function Card(props) {
    let tag;
    if(props.item.batchcount === 0){
        tag = "Sold Out"
    }
    else{
        tag = "Online"
    }
    return (
            <div className="card">
                {tag && <section className='tag'>{tag}</section>}
                {/*{`./images/${props.img}`}*/}
                <img src={`./images/${props.item.coverImg}`} alt="the _momo" className="card-img"></img>
                <div className="card-stats">
                    <img src="./images/star.png" alt="the _momo"></img>
                    <span>•{props.item.stats.rating}•</span>
                    <span>{props.item.stats.reviewCount}•</span>
                    <span>{props.item.location}</span>
                </div>
                <p><b>From ${props.item.price}</b>/person</p>
                <p className="card-title"><b>{props.item.title}</b></p>
            </div>
    )
}