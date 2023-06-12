import React, { Component } from "react";

export default class Academy_Class_Component extends Component {
  render() {
    const { name, description } = this.props;

    return (
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }
}
