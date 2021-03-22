import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
