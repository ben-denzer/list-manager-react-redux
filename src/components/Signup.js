import React, {Component} from 'react';
import * as actions from '../actions/formActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
        this.verify = this.verify.bind(this);
        this.showError = this.showError.bind(this);
    }
    handleChange(e) {
        if (this.props.error) this.checkUsername(this.props.signupUsernameVal);
        this.props.actions.handleChange(e.target.value, e.target.id + 'Val');
    }
    checkUsername(val) {
        console.log('called checkUsername');
        this.props.actions.checkUsername(val);
    }
    verify() {
        let {signupUsernameVal, signupPassword1Val, signupPassword2Val} = this.props;
        if (signupUsernameVal.length <= 2) return this.showError('Username must be at least 3 characters long');
        if (signupPassword1Val.length <6) return this.showError('Password must be at least 6 characters');
        if (signupPassword1Val !== signupPassword2Val) return this.showError('Passwords do not match');
        this.props.actions.signup(signupUsernameVal, signupPassword1Val);
    }
    showError(err) {
        console.log(err);
    }
    render() {
        this.props.error ? console.log(this.props.error) : console.log('username ok');
        return (
            <div>
                <label>
                    Username
                    <input id="signupUsername"
                        value={this.props.signupUsernameVal}
                        onChange={this.handleChange}
                        onBlur={this.props.actions.checkUsername.bind(null, this.props.signupUsernameVal)}
                    />
                </label>
                <label>
                    Password
                    <input id="signupPassword1"
                        type="password"
                        value={this.props.signupPassword1Val}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Re-Type Password
                    <input id="signupPassword2"
                        type="password"
                        value={this.props.signupPassword2Val}
                        onChange={this.handleChange} />
                </label>
                <button className="btn btn-info"
                    onClick={this.verify}
                >
                    Sign Up
                </button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        signupUsernameVal: state.form.signupUsernameVal,
        signupPassword1Val: state.form.signupPassword1Val,
        signupPassword2Val: state.form.signupPassword2Val,
        error: state.form.error
    }
}

let mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);