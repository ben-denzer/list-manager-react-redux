import React from 'react';
import ListItem from './ListItem';

const ListView = (props) => {
  let items = props.items || [];
  let eachItem = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i]) {
      eachItem[i] = (
        <ListItem
          key={i}
          item={items[i].item}
          itemIndex={i}
          checked={items[i].finished}
        />
      );
    }
  }
  return (
    <div className="col-xs-12 col-sm-9">
      <div style={styles.showPointer} className="well">

        <span style={styles.listNameStyle}>{props.activeList || 'No List Selected'}</span>

        <div style={props.activeList ? styles.floatRight : styles.hidden}>
          <button onClick={() => props.deleteList()} className="btn btn-danger btn-sm">Delete List</button>
        </div>
        <hr />

        <div style={props.activeList ? !props.items.length ? styles.hidden : null : null}>

          {eachItem}

        </div>

        <div style={!props.activeList ? styles.hidden : null}>
          <input value={props.newItemText} onChange={props.newItemTextChange} />&nbsp;&nbsp;
          <button onClick={() => props.addNewItem()} className="btn btn-success">Add Item</button>
        </div>
      </div>
    </div>
  );
};

let styles = {
  floatRight: {float: 'right'},
  listNameStyle: {fontSize: '18pt'},
  showPointer: {cursor: 'pointer'},
  hidden: {visibility: 'hidden'}
};

export default ListView;
