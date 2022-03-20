import React, { Component } from "react";

class Sharedtextarea extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
         <textarea className="textarea-style"
          name="textValue"
          onChange={this.props.handleChange}
          type="text" 
          placeholder="Type the sentimental lyrics..."
        />
      </div>
    );
  }
}

export default Sharedtextarea;