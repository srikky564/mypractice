import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import App from './containers/App';
import { searchRobots, requestRobots } from './containers/reducer';
const rootReducer = combineReducers( { searchRobots, requestRobots } )
const logger = createLogger();
const store = createStore( rootReducer, applyMiddleware( thunkMiddleware, logger ) );

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>

    , document.getElementById( 'root' ) );
registerServiceWorker();
