import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga4';
const trackingId = 'G-DHR8Q1P969'; // Replace with your Google Analytics tracking ID
ReactGA.initialize('G-DHR8Q1P969');
console.log("tracker ",trackingId);
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
