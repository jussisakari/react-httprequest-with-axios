import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log("Request sent: ", request);
    return request;
}, error => { 
    console.log("Error on sending request: ", error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log("Response received ", response);
    return response;
}, error => {
    console.log("Error on receiving response ", error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
