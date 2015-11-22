import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>React Router Demo</h1>
                <hr />
                <p>
                    by <a href="http://stylechen.com/" target="_blank">stylechen.com</a>
                </p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/concat">Concat</Link></li>
                    <li><Link to="/list/001">List 001</Link></li>
                    <li><Link to="/list/002">List 002</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
};

export default App;
