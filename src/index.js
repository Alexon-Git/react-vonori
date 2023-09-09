import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.scss';
import 'macro-css';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>
);