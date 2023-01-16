import React from "react";

export default function Card() {
    return (
        <div className="card">
			<img src="./images/card-1.jpg" alt="the _momo" className="card-img"></img>
			<div className="card-stats">
                <img src="./images/star.png" alt="the _momo"></img>
                <span>5.0</span>
                <span>(6) • </span>
                <span>USA</span>
            </div>
            <p>Life Lessons with Bob Marley</p>
            <p><b>From $136</b>/person</p>
		</div>
    )
}