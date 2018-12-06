import React from 'react';
import ReactDOM from 'react-dom';

// Redux Dependencies
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store Definition
const store = createStore(rootReducer);
const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={ store }>
        <App/>    
    </Provider>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
