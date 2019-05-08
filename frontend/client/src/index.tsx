import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './styles/global.scss';

import App from './components/app';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));