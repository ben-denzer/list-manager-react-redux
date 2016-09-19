import React from 'react';

const Sidebar = (props) => {
    let eachList = [<div key="noList" style={styles.hidden}>No Lists</div>];
    let lists = props.lists;
    let active = props.active;

    if (lists.length) {
        eachList = lists.map(a => {
            let isActive = 'list-group-item';
            if (a === active) isActive += ' active';
            return (
                <a
                    key={a}
                    id={a}
                    style={styles.sidebarButtonStyle}
                    className={isActive}
                    onClick={props.changeActive.bind(null, a)}
                >{a}</a>
            );
        });
    }

    return (
        <div className="col-xs-12 col-sm-3" id="sidebar">
            <div id="name_box" style={styles.nameStyle}>
                {props.name || 'Log In or Sign Up'}</div>
            <div id="list_box" style={styles.marginTop10} className="list-group">
                {eachList}

                <div id="add_list_box" style={props.name ? styles.marginTop10 : styles.hidden}>
                    <input
                        value={props.newListText}
                        onChange={props.newListTextChange}
                        onKeyUp={props.newListTextChange}
                    />
                    <button
                        id="add_list"
                        className="btn btn-block btn-success"
                        onClick={props.addNewList}
                    >Add List</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    sidebarButtonStyle: {cursor: 'pointer'},
    noListsStyle: {
        fontSize: '18pt',
        marginTop: '10px'
    },
    nameStyle: {
        marginTop: '10px',
        fontSize: '18pt'
    },
    marginTop10: {
        marginTop: '10px'
    },
    hidden: {
        visibility: 'hidden'
    }
};

export default Sidebar;
