import React from "react";

const style = {
  navBar: {
  borderColor: 'green',
  backgroundColor: 'green',
  color: 'black'
}
};

const Nav = () =>
  <nav className="navbar navbar-default navbar-top" style={style.navBar}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle </span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a style={style.navBar} href="/" className="navbar-brand">
          NeW York Times
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><a style={style.navBar} href="/">Search</a></li>
          <li><a style={style.navBar} href="/saved">Saved Articles</a></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;