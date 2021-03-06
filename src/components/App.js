import React from 'react';
import {changeUrl} from '../routes';
import {connect} from 'react-redux';
import {logout} from '../actions/apiActions';

let App = (props) => {
    let error = Object.keys(props.error).map(a => props.error[a]);
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
                                <a style={!props.user ? styles.a : styles.hidden}
                                    onClick={changeUrl.bind(null, 'login')}
                                >Login</a>
                            </li>
                            <li>
                                <a style={!props.user ? styles.a : styles.hidden}
                                    onClick={changeUrl.bind(null, 'signup')}
                                >Sign Up</a>
                            </li>
                            <li>
                                <a style={!props.user ? styles.hidden : styles.a}
                                    onClick={props.logout.bind(null, '')}
                                >Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="alert alert-danger"
                style={error.length ? styles.visible : styles.hidden}
            >
                {error[0]}
            </div>

            {props.children}
        </div>
    );
};

let styles = {
    a: {cursor: 'pointer'},
    hidden: {display: 'none'},
    visible: {display: 'block', textAlign: 'center'}
};

let mapStateToProps = (state) => {
    return {
        user: state.user.username,
        error: state.error
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
