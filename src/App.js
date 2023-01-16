import React from 'react';
import './App.css';
import Card from './components/Card';
export default function App() {
	return (
		<div className="App">
			<div className="card-container">
				<Card 
					img = "card-1.jpg"
					rating = "5.0"
					review = {6}
					country = "USA"
					title = "Learn Photography with Josh Gates"
					price = {138}
				/>
				<Card 
					img = "card-2.jpg"
					rating = "4.8"
					review = {10}
					country = "Mexico"
					title = "Wedding planning with Sarah Todler"
					price = {50}
				/>
				<Card 
					img = "card-3.jpg"
					rating = "4.72"
					review = {2}
					country = "Japan"
					title = "Getting Started to Biotechnology with Nishimiya Senju"
					price = {98}	
				/>
				<Card 
					img = "card-4.jpg"
					rating = "4.58"
					review = {14}
					country = "South-Korea"
					title = "Business analytics with Shin Guem Hui"
					price = {150}
				/>
				<Card 
					img = "card-5.jpg"
					rating = "4.91"
					review = {45}
					country = "India"
					title = "Getting Jobs in software industry with Pavitra Pandey"
					price = {168}
				/>
				<Card 
					img = "card-6.jpg"
					rating = "4.95"
					review = {4}
					country = "Nepal"
					title = "Economy at a glance by Yash Atal"
					price = {48}
				/>
			</div>
		</div>
	);
}