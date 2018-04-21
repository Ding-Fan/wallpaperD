import React from 'react';

class PicView extends React.Component {

  render() {
    return (
      <div className="single-pic">
        <img src={this.props.src} alt=""/>
      </div>
    )
  }
}

export default PicView;