import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/apiActions';

const styles = {
    loginDiv: {marginLeft: '20%'}
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            userVal: '',
            pwVal: ''
        };
    }
    handleChange(e) {
        this.setState({[e.target.id]: e.target.value})
    }
    login() {
        this.props.actions.loadUser(this.state.userVal, this.state.pwVal);
    }
    render() {
        return (
            <div style={styles.loginDiv}>
                <h2>Log In</h2>
                <label>
                    Username
                    <input
                        id="userVal"
                        value={this.state.userVal}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        id="pwVal"
                        type="password"
                        value={this.state.pwVal}
                        onChange={this.handleChange}
                    />
                </label>
                <button onClick={this.login}>Log In</button>
            </div>
        );
    }
}

let mapStateToProps = () => {
    return {};
}

let mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Login);