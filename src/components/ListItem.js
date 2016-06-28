import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/listActions';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(e) {
    e.stopPropagation();
    this.props.actions.deleteItem(this.props.itemIndex, this.props.activeList);
  }

  render() {
    let iconClassName = 'glyphicon glyphicon-';

    this.props.checked ? iconClassName += 'check' : iconClassName += 'unchecked';
    return (
      <div>
        <div className="row">
          <div
            style={styles.itemStyle}
            onClick={() => this.props.actions.toggleCheck(this.props.itemIndex, this.props.activeList)}
            className="col-md-12">

            <span className={iconClassName}></span>
            <span style={styles.itemTitleStyle}>{this.props.item}</span>
            <button
              onClick={this.deleteItem}
              className="btn btn-danger btn-sm pull-right">
                Remove Item
            </button>

          </div>
        </div>
        <hr />
      </div>
    );
  }
}

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
