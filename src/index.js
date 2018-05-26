import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { createStore } from 'redux'
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import familyReducer from './Family/Reducer/familyReducer';

const store = createStore(familyReducer)

ReactDOM.render(
        <Provider store={store}>
            <Router>
            <App />
            </Router>
        </Provider>
        ,document.getElementById('root'));
registerServiceWorker();

