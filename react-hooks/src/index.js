import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode> // if we use this, our application renders twice, only while in development mode
		<App />
	// </React.StrictMode>
);
