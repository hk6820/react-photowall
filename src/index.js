import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './style/stylesheet.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/Reducer';
import { Provider } from "react-redux";
import thunk from 'redux-thunk'; 
import {database} from './database/config'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
