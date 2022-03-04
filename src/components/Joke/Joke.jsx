import React, { Component } from "react";

export default class Joke extends Component {
  render() {
		let {joke} = this.props;
    return (
      <div className="joke">
        <p className="joke__text">{joke}</p>
      </div>
    );
  }
}
