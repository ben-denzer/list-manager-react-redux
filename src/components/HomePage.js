import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/listActions';
import Sidebar from './Sidebar';
import ListView from './ListView';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Sidebar />
          <ListView />
        </div>
      </div>
    );
  }
}

// Main.propTypes = {
// };
//
// let mapStateToProps = (state) => {
//   return {
//     name: state.name,
//     lists: Object.keys(state.lists),
//     activeList: state.activeList,
//     items: [...state.lists[state.activeList]]
//   };
// };
//
// let mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)});
//
// export default connect(mapStateToProps, mapDispatchToProps)(Main);

export default HomePage;
