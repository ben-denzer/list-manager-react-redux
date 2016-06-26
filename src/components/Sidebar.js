import React from 'react';

const Sidebar = (props) => {
  return (
    <div className="col-xs-12 col-sm-3">
      <p className="lead">Shop Name</p>
      <div className="list-group">
        <a href="#" className="list-group-item active">Category 1</a>
        <a href="#" className="list-group-item">Category 2</a>
        <a href="#" className="list-group-item">Category 3</a>
      </div>
    </div>
  );
}

export default Sidebar;
