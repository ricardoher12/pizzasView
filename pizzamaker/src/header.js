import React from 'react';
import './public/style/header.css';

function Header() {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">Pizza Maker&nbsp;&nbsp;2021</h6>
          <h6 className="text-uppercase">Guatemala, Guatemala</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <h2>Silicon Valley Interview</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
