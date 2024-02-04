import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './App.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
]);

const rootDom = document.getElementById('root');

if (!rootDom) throw new Error('rootDom not found');

ReactDOM.createRoot(rootDom).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
