import React from 'react';

const ListView = (props) => {
  return (
    <div className="col-xs-12 col-sm-9">
      <div className="well">
        <div className="text-right">
          <a className="btn btn-success">Leave a Review</a>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-12">
            <span className="glyphicon glyphicon-star"></span>
            <span className="glyphicon glyphicon-star-empty"></span>
            Anonymous
            <span className="pull-right">10 days ago</span>
            <p>This product was great in terms of quality. I would definitely buy another!</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ListView;
