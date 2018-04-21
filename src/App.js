import React, { Component } from "react";
import "./css/App.css";

import Axios from "axios";

import Pic from "./components/Pic";
// import PicView from "./components/PicView";

class App extends Component {
  state = {
    pics: [],
    loading: true,
    // viewPicSrc: "",
  };

  getPic = () => {
    let page = this.state.page + 1;
    this.setState({ page });
    const unsplashAPI = "https://api.unsplash.com";
    const randomPhotos = `${unsplashAPI}/photos/random`;
    const client_id =
      "dbd5a4c528627ee334419e601154fb04e65d529ed943a90e40e199e037504ca1";

    Axios.get(randomPhotos, {
      params: {
        client_id,
        query: "wallpaper",
        count: 30
      }
    })
      .then(response => {
        this.setState({ pics: response.data, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // viewPicHandle = viewPicSrc => {
  //   this.setState({ viewPicSrc });
  // };

  // handleExitViewPic = () => {
  //   this.setState({ viewPicSrc: "" });
  // };

  componentDidMount() {
    this.getPic();
  }

  render() {
    if (this.state.loading === true) {
      return <h3 className="loading">Loading ...</h3>;
    }

    // if (this.state.viewPicSrc) {
    //   return (
    //     <PicView
    //       src={this.state.viewPicSrc}
    //       exitViewPic={this.handleExitViewPic}
    //     />
    //   );
    // }

    return (
      <div className="App">
        <div className="container">
          {this.state.pics.map((pic, index) => (
            <Pic
              key={index}
              src={pic.urls.regular}
              viewPicHandle={this.viewPicHandle}
            />
          ))}
        </div>
        {/* <button className="load-more" onClick={this.getPic}>
          Load More!
        </button> */}
      </div>
    );
  }
}

export default App;
