import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//axios.defaults.headers.post['Content-Type'] = 'application/json'; // Default already, just an example

const requestInterceptor = axios.interceptors.request.use(request => {
    console.log("Request sent: ", request);
    return request;
}, error => { 
    console.log("Error on sending request: ", error);
    return Promise.reject(error);
});

const responseInterceptor = axios.interceptors.response.use(response => {
    console.log("Response received ", response);
    return response;
}, error => {
    console.log("Error on receiving response ", error);
    return Promise.reject(error);
});

// Remove interceptors
// axios.interceptors.request.eject(requestInterceptor);
// axios.interceptors.response.eject(responseInterceptor);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
