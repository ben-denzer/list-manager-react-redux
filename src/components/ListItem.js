import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/listActions';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItemTemp = this.deleteItemTemp.bind(this);
        this.undoDelete = this.undoDelete.bind(this);
        this.toggleCheck = this.toggleCheck.bind(this);
    }
    deleteItemTemp(e) {
        e.stopPropagation();
        this.props.actions.deleteItemTemp(
            this.props.token,
            this.props.item,
            this.props.activeList,
            this.props.item_id
        );
    }
    undoDelete(e) {
        e.stopPropagation();
        this.props.actions.undoDelete();
    }
    toggleCheck() {
        this.props.actions.toggleCheck(
            this.props.token,
            this.props.item_id,
            this.props.checked,
            this.props.itemIndex,
            this.props.activeList
        );
    }
    render() {
        let iconClassName = 'glyphicon glyphicon-';
        this.props.checked ? iconClassName += 'check' : iconClassName += 'unchecked';
        let isTrash = this.props.trash.indexOf(this.props.item) !== -1;

        return (
            <div>
                <div className="row">
                    <div style={isTrash ? styles.hidden : styles.inline}>
                        <div
                            style={styles.itemStyle}
                            onClick={this.toggleCheck}
                            className="col-md-12">

                            <span className={iconClassName}></span>
                            <span style={styles.itemTitleStyle}>{this.props.item}</span>
                        </div>
                    </div>
                    <button
                        onClick={isTrash ? this.undoDelete : this.deleteItemTemp}
                        className={isTrash ? "btn btn-default btn-sm pull-right": "btn btn-danger btn-sm pull-right"}>
                        {isTrash ? 'UNDO' : 'Remove Item'}
                    </button>
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
    },
        hidden: {
        display: 'none'
    },
    inline: {
        display: 'inline-block',
        float: 'left'
    }
};

let mapStateToProps = (state) => {
    return {
        token: state.user.token,
        activeList: state.activeList,
        trash: state.trash
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
