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

  render() {
    return (
      <div className="container">
        <div className="row">
          <Sidebar name={this.props.name}
            lists={this.props.lists}
            active={this.props.activeList}
            changeActive={this.changeActive}
          />
          <ListView
            items={this.props.items}
            activeList={this.props.activeList}
            deleteList={this.deleteList}
            newItemText={this.props.newItemText}
            newItemTextChange={this.newItemTextChange}
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
    newItemText: state.newItemText
  };
};

let mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
