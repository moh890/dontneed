import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.countStyle()}>{this.formatCount()}</span>
        <span
          onClick={() => this.props.onIncrement(this.props.state)}
          className="btn btn-primary m-2"
        >
          Increment
        </span>
        <span
          onClick={() => this.props.onDelete(this.props.state.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </span>
      </div>
    );
  }

  countStyle() {
    let str = "badge m-2 badge-";
    return this.props.state.value === 0
      ? (str += "danger")
      : (str += "secondary");
  }

  formatCount() {
    let { value } = this.props.state;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
