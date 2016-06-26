import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/listActions';
import Sidebar from './Sidebar';
import ListView from './ListView';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Sidebar name={this.props.name}
            lists={this.props.lists}
            active={this.props.activeList}
          />
          <ListView
            items={this.props.items}
            activeList={this.props.activeList}
          />
        </div>
      </div>
    );
  }
}

// Main.propTypes = {
// };
//
 let mapStateToProps = (state) => {
  return {
    name: state.user,
    lists: Object.keys(state.lists),
    activeList: state.activeList,
    items: state.lists[state.activeList]
  };
};

let mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
