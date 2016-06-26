import React from 'react';

const Sidebar = (props) => {
  let eachList = [<div key="noList" style={styles.noListsStyle}>No Lists</div>];
  let lists = props.lists;
  let active = props.active;

  for (let i = 0; i < props.lists.length; i++) {
    let isActive = 'list-group-item';

    lists[i] === active ? isActive += ' active' : null;

    eachList[i] = (
      <a
        key={i}
        id={lists[i]}
        style={styles.sidebarButtonStyle}
        className={isActive}
      >
        {lists[i]}
      </a>
    )
  }
  return (
    <div className="col-xs-12 col-sm-3">
      <div style={styles.nameStyle}>{props.name}</div>
      <div style={styles.marginTop10} className="list-group">
        {eachList}
      </div>
    </div>
  );
};

const styles = {
  sidebarButtonStyle: {cursor: 'pointer'},
  noListsStyle: {
    fontSize: '18pt',
    marginTop: '10px',
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
