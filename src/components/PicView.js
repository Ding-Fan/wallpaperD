import React from 'react';

import '../css/PicView.css';

class PicView extends React.Component {

  render() {
    return (
      <div className="single-pic">
        <img src={this.props.src} alt=""/>
        <button onClick={this.props.exitViewPic}>Exit</button>
      </div>
    )
  }
}

export default PicView;