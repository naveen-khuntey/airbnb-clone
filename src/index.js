import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./components/NavBar"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<Navbar />
		<App />
		<p>hello 2</p>
	</div>
);


