import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as actions from '../actions/apiActions';
import {changeUrl} from '../routes';

const styles = {
    loginDiv: {marginLeft: '20%'},
    alert: {
        hidden: {visibility: 'hidden'},
        show: {
            visibility: 'visible',
            width: '70%',
            marginTop: '30px'
        }
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            userVal: '',
            pwVal: ''
        };
    }
    handleChange(e) {
        if (e.which === 13 || e.keycode === 13) {
            this.login();
        } else {
            this.setState({[e.target.id]: e.target.value});
        }
    }
    login() {
        this.props.loadUser({
            username: this.state.userVal,
            password: this.state.pwVal
        });
    }
    render() {
        return (
            <div style={styles.loginDiv} onKeyUp={this.handleChange}>
                <h2>Log In</h2>
                <label>
                    Username
                    <input
                        id="userVal"
                        value={this.state.userVal}
                        onChange={this.handleChange}
                        onKeyUp={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        id="pwVal"
                        type="password"
                        value={this.state.pwVal}
                        onChange={this.handleChange}
                        onKeyUp={this.handleChange}
                    />
                </label>
                <button onClick={this.login}>Log In</button>
                <div
                    className="alert alert-danger"
                    style={this.props.authError ? styles.alert.show : styles.alert.hidden}
                >
                    Invalid Username or Password - <a className="alert-link" onClick={changeUrl.bind(null, 'signup')}>
                        Click Here to Create a New Account (it's free)
                    </a>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        authError: state.user.authError
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        loadUser: (username, password) => dispatch(actions.loadUser(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);