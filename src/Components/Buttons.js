import React, { Component } from "react";

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
         <button className="button-submit-style">Submit</button>
         <button className="button-reset-style">Reset</button>
      </div>
    );
  }
}

export default Buttons;