import React from 'react';
import './App.css';
import Card from './components/Card';
import Data from "./components/Data";

export default function App() {
	const arr = Data.map(item => {
		return (
			<Card 
				key = {item.id}
				img = {item.coverImg}
				rating = {item.stats.rating}
				review = {item.stats.reviewCount}
				country = {item.location}
				title = {item.title}
				price = {item.price}
				batchcount = {item.batchcount}
			/>

		)
	})
	return (
		<div className="App">
			<div className="card-container">
				
				{arr}
			</div>
		</div>
	);
}