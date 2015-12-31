import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';
import About from './component/about';
import Concat from './component/concat';
import List from './component/list';

import {Router, Route, browserHistory} from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="concat" component={Concat} />
            <Route path="list/:id" component={List} />
        </Route>
    </Router>
);

ReactDOM.render(
    router,
    document.getElementById('root')
);
