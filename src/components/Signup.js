import React, {Component} from 'react';
import * as actions from '../actions/formActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.verify = this.verify.bind(this);
        this.showError = this.showError.bind(this);
    }
    handleChange(e) {
        this.props.actions.handleChange(e.target.value, e.target.id + 'Val');
    }
    verify() {
        let {signupUsernameVal, signupPassword1Val, signupPassword2Val} = this.props;
        if (signupUsernameVal.length <= 2) return this.showError('Username must be at least 3 characters long');
        if (signupPassword1Val.length <6) return this.showError('Password must be at least 6 characters');
        if (signupPassword1Val !== signupPassword2Val) return this.showError('Passwords do not match');

        this.props.actions.signup(this.props.signupUsernameVal, this.props.signupPassword1Val);
    }
    showError(err) {
        console.log(err);
    }
    render() {
        return (
            <div style={styles.form}>
                <label>
                    Username <input id="signupUsername"
                        style={this.props.usernameError ? styles.inputError : styles.inputOk}
                        value={this.props.signupUsernameVal}
                        onChange={this.handleChange}
                    />
                </label>
                <span style={this.props.usernameError ? styles.warning : styles.warningHidden}>
                    Username is Taken
                </span>
                <label>
                    Password <input id="signupPassword1"
                        type="password"
                        style={this.props.signupPassword1Val.length < 6 ? styles.inputError : styles.inputOk}
                        value={this.props.signupPassword1Val}
                        onChange={this.handleChange}
                    />
                </label>
                <span style={this.props.signupPassword1Val.length < 6 ? styles.warning : styles.warningHidden}>
                    Must Be at Least 6 characters
                </span>
                <label>
                    Re-Type Password <input id="signupPassword2"
                        type="password"
                        style={this.props.signupPassword1Val === this.props.signupPassword2Val ?
                            styles.inputOk :
                            styles.inputError}
                        value={this.props.signupPassword2Val}
                        onChange={this.handleChange} />
                </label>
                <span style={this.props.signupPassword1Val !== this.props.signupPassword2Val ?
                    styles.warning :
                    styles.warningHidden}
                >
                    Passwords Do Not Match
                </span>
                <button className="btn btn-info"
                    onClick={this.verify}
                >
                    Sign Up
                </button>
            </div>
        );
    }
}

let styles = {
    form: {
        width: '50%',
        minWidth: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    inputError: {boxSizing: 'border-box', border: '2px solid red'},
    inputOk: {boxSizing: 'border-box', border: '1px solid #444'},
    warning: {color: 'red'},
    warningHidden: {visibility: 'hidden'}
};

let mapStateToProps = (state) => {
    return {
        signupUsernameVal: state.form.signupUsernameVal,
        signupPassword1Val: state.form.signupPassword1Val,
        signupPassword2Val: state.form.signupPassword2Val,
        usernameError: state.form.error.usernameError
    };
};

let mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)};
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);