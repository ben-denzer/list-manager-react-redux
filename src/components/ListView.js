import React from 'react';
import ListItem from './ListItem';
import Modal from './Modal';

const ListView = (props) => {
    let items = props.items || [];
    let eachItem = [];
    // -------------- Screwed myself using itemIndex - FIX
    // let eachItem = items.map(a => {
    //     return (
    //         <ListItem
    //             key={a.item}
    //             item={a.item}
    //             checked={a.checked}
    //             item_id={a.item_id}
    //         />
    //     );
    // });

    for (let i = 0; i < items.length; i++) {
        if (items[i]) {
            eachItem[i] = (
                <ListItem
                    key={i}
                    item={items[i].item}
                    itemIndex={i}
                    checked={items[i].checked}
                    item_id={items[i].item_id}
                />
            );
        }
    }
    return (
        <div id="list_view" className="col-xs-12 col-sm-9">
            <div id="list_well" style={styles.showPointer} className="well">

                <span id="list_title" style={styles.listNameStyle}>{props.activeList || 'No List Selected'}</span>

                <div id="delete_list" style={props.activeList ? styles.floatRight : styles.hidden}>
                    <button
                        data-toggle="modal"
                        data-target="#myModal"
                        className="btn btn-danger btn-sm">

                        Delete List
                    </button>
                </div>
                <hr />

                <div id="item_box" style={props.activeList ? !props.items.length ? styles.hidden : null : null}>
                    {eachItem}
                </div>

                <div id="add_item_box" style={!props.activeList ? styles.hidden : null}>
                    <input
                        value={props.newItemText}
                        onKeyUp={props.newItemTextChange}
                        onChange={props.newItemTextChange}
                    />
                    <button onClick={() => props.addNewItem()} className="btn btn-success">Add Item</button>
                </div>

                <Modal activeList={props.activeList} deleteList={props.deleteList} />
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
