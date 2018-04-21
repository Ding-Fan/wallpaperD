import React from 'react';
import '../css/Pic.css';

class Pic extends React.Component {
  render() {
    return (
      <div>
            <li><img src={this.props.src} alt=""/></li>
      </div>
    );
  }
}

export default Pic;