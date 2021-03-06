import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/listActions';
import {loginWithToken} from '../actions/apiActions';
import Sidebar from './Sidebar';
import ListView from './ListView';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.changeActive = this.changeActive.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.newItemTextChange = this.newItemTextChange.bind(this);
        this.newListTextChange = this.newListTextChange.bind(this);
        this.addNewList = this.addNewList.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
    }
    componentWillMount() {
        if (!this.props.name) {
            const username = window.localStorage.getItem('username');
            const token = window.localStorage.getItem('token');
            if (username && token) {
                this.props.loginWithToken(username, token);
            }
        }
    }
    changeActive(newActive) {
        if (newActive === this.props.activeList) {
            return;
        }
        this.props.actions.changeActive(newActive);
    }
    deleteList() {
        this.props.actions.deleteList(this.props.token, this.props.activeList);
    }
    newItemTextChange(e) {
        e.which === 13 || e.keycode === 13 ?
            this.addNewItem() :
            this.props.actions.newItemTextChange(e.target.value);
    }
    newListTextChange(e) {
        e.persist();
        e.which === 13 || e.keycode === 13 ?
            this.addNewList() :
            this.props.actions.newListTextChange(e.target.value);
    }
    addNewList() {
        if (this.props.newListText) {
            if (this.props.lists.indexOf(this.props.newListText) === -1) {
                this.props.actions.addNewList(this.props.newListText);
            }
            else {
                alert('You already a list by that name');
            }
        }
    }
    addNewItem() {
        if (this.props.newItemText) {
            if (this.props.items.filter(a => a.item === this.props.newItemText).length) {
                alert('You already have an item with that name');
            }
            else {
                this.props.actions.addNewItem(
                    this.props.token,
                    this.props.newItemText,
                    this.props.activeList
                );
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Sidebar name={this.props.name}
                        lists={this.props.lists}
                        active={this.props.activeList}
                        changeActive={this.changeActive}
                        newListText={this.props.newListText}
                        newListTextChange={this.newListTextChange}
                        addNewList={this.addNewList}
                    />
                    <ListView
                        items={this.props.items}
                        activeList={this.props.activeList}
                        deleteList={this.deleteList}
                        newItemText={this.props.newItemText}
                        newItemTextChange={this.newItemTextChange}
                        addNewItem={this.addNewItem}
                    />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
return {
        name: state.user.username,
        token: state.user.token,
        lists: Object.keys(state.lists),
        activeList: state.activeList,
        items: state.lists[state.activeList] || [],
        newItemText: state.text.newItemText,
        newListText: state.text.newListText
    };
};

let mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    loginWithToken: bindActionCreators(loginWithToken, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
