import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './components/Main/Main';

const supportsHistory = 'pushState' in window.history;

window.onload = () => {
    ReactDOM.render(
    <BrowserRouter forceRefresh={!supportsHistory}>
        <Main />
    </BrowserRouter>, 
    document.getElementById('root'));
};
