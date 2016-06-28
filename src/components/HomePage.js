import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/listActions';
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

  changeActive(newActive) {
    if (newActive === this.props.activeList) {
      return;
    }
    this.props.actions.changeActive(newActive);
  }

  deleteList() {
    this.props.actions.deleteList(this.props.activeList);
  }

  newItemTextChange(e) {
    this.props.actions.newItemTextChange(e.target.value);
  }

  newListTextChange(e) {
    this.props.actions.newListTextChange(e.target.value);
  }

  addNewList() {
    if (this.props.newListText) {
      this.props.actions.addNewList(this.props.newListText);
    }
  }

  addNewItem() {
    if (this.props.newItemText) {
      this.props.actions.addNewItem(this.props.newItemText, this.props.activeList);
    }
  }

  render() {
    // console.log('----------------------');
    // console.log('name:', this.props.name);
    // console.log('lists:', Object.keys(this.props.lists));
    // console.log('activeList:', this.props.activeList);
    // for (let i in this.props.items) {
    //   console.log('items:', this.props.items[i]);
    // }
    // console.log('newItemText:', this.props.newItemText);
    // console.log('newListText:', this.props.newListText);
    // console.log('=======================');
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
    name: state.user,
    lists: Object.keys(state.lists),
    activeList: state.activeList,
    items: state.lists[state.activeList],
    newItemText: state.text.newItemText,
    newListText: state.text.newListText
  };
};

let mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
