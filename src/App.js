import React from 'react';
import './App.css';
import Card from './components/Card';
export default function App() {
	return (
		<div className="App">
			<div className="card-container">
				<Card 
					img = ""
					rating = "5.0"
					review = {6}
					country = "USA"
					title = "Learn Photography with Josh Gates"
					price = {138}
				/>
				<Card 
					img = ""
					rating = "4.8"
					review = {10}
					country = "Mexico"
					title = "Wedding planning with Sarah Todler"
					price = {50}
				/>
				<Card 
					img = ""
					rating = "4.72"
					review = {2}
					country = "Japan"
					title = "Getting Started to Biotechnology with Nishimiya Senju"
					price = {98}	
				/>
				<Card 
					img = ""
					rating = "4.58"
					review = {14}
					country = "South-Korea"
					title = "Business analytics with Shin Guem Hui"
					price = {150}
				/>
				<Card 
					img = ""
					rating = "4.91"
					review = {45}
					country = "India"
					title = "Software Industry reality of getting Jobs by Pavitra Pandey"
					price = {168}
				/>
				<Card 
					img = ""
					rating = "4.95"
					review = {4}
					country = "Nepal"
					title = "Economy to it's best by Yash Atal"
					price = {48}
				/>
			</div>
		</div>
	);
}