import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/index';
import thunk from 'redux-thunk'


const initialState = 0;

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
)


console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
