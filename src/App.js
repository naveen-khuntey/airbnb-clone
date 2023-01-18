import React from 'react';
import './App.css';
import Card from './components/Card';
import Data from "./components/Data";

export default function App() {
	const arr = Data.map(item => {
		return (
			<Card 
				key = {item.id}
				item = {item}//passing whole data array as object
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