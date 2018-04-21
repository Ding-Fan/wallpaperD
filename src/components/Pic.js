import React from "react";
import "../css/Pic.css";

class Pic extends React.Component {
  render() {
    return (
      <div>
          <img
            src={this.props.src}
            alt=""
          />
      </div>
    );
  }
}

export default Pic;
