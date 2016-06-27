import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/listActions';

const ListItem = (props) => {
  let iconClassName = 'glyphicon glyphicon-';

  props.checked ? iconClassName += 'check' : iconClassName += 'unchecked';
  return (
    <div>
      <div className="row">
        <div
          style={styles.itemStyle}
          onClick={() => props.actions.toggleCheck(props.itemIndex, props.activeList)}
          className="col-md-12">

          <span className={iconClassName}></span>
          <span style={styles.itemTitleStyle}>{props.item}</span>
          <button
            onClick={() => props.actions.deleteItem(props.itemIndex, props.activeList)}
            className="btn btn-danger btn-sm pull-right">
              Remove Item
          </button>

        </div>
      </div>
      <hr />
    </div>
  );
};

let styles = {
  itemTitleStyle: {
    marginLeft: '20px'
  },
  itemStyle: {
    fontSize: '14pt'
  }
};

let mapStateToProps = (state) => {
  return {
    activeList: state.activeList
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
