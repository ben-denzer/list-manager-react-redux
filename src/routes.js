import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import HomePage from './components/HomePage';
import App from './components/App';
import Login from './components/Login';

export function changeUrl(url) {
    return browserHistory.push(url);
};

export default (
    <Route path="/" changeUrl={changeUrl} component={App}>
        <IndexRoute changeUrl={changeUrl} component={HomePage} />
        <Route path="/login" changeUrl={changeUrl} component={Login} />
    </Route>
);
