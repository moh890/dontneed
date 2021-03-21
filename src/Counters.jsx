import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    count: [
      { id: 1, value: 2 },
      { id: 2, value: 25 },
      { id: 3, value: 27 },
      { id: 4, value: 29 },
      { id: 5, value: 2 },
    ],
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-danger m-2 btn-sm"
        >
          Reset
        </button>
        {this.state.count.map((cou) => (
          <Counter
            onIncrement={this.handleIncrement}
            key={cou.id}
            state={cou}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }

  handleIncrement = (counter) => {
    var count = this.state.count.map((c) => {
      c.id == counter.id ? (c.value = c.value + 1) : (c.value = c.value);
      return c;
    });
    this.setState({ count });
  };

  handleReset = () => {
    var count = this.state.count.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ count });
  };

  handleDelete = (delId) => {
    // console.log("deleteed", delId);
    let count = this.state.count.filter((a) => a.id !== delId);
    this.setState({ count });
  };
}

export default Counters;
