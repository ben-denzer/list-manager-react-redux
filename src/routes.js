import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import HomePage from './components/HomePage';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';

export function changeUrl(url) {
    return browserHistory.push(url);
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Route>
);
