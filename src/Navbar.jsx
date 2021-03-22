import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="navbar-brand">
            Navbar
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
