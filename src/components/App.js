import React, {PropTypes, Component} from 'react';
import {changeUrl} from '../routes';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    handleLoginClick() {
        changeUrl('/login');
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">List Manager - Ben Denzer</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a style={styles.a}onClick={this.handleLoginClick}>login / sign up</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {this.props.children}
             </div>
        );
    }
}

let styles = {
    a: {cursor: 'pointer'}
};

export default App;
