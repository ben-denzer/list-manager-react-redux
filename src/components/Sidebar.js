import React from 'react';

const Sidebar = (props) => {
    let eachList = [<div key="noList" style={styles.noListsStyle}>No Lists</div>];
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
        <div className="col-xs-12 col-sm-3">
            <div style={styles.nameStyle}>{props.name}</div>
            <div style={styles.marginTop10} className="list-group">
                {eachList}

                <div style={styles.marginTop10}>
                    <input
                        value={props.newListText}
                        onChange={props.newListTextChange}
                        onKeyUp={props.newListTextChange}
                    />
                    <button className="btn btn-success" onClick={props.addNewList}>Add List</button>
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
        fontSize: '22pt'
    },
    marginTop10: {
        marginTop: '10px'
    }
};

export default Sidebar;
