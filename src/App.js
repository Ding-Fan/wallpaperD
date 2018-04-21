import React, { Component } from "react";
import "./css/App.css";

import Axios from "axios";

import Pic from "./components/Pic";

class App extends Component {
  state = {
    pics: [],
    loading: true
  };

  getPic = () => {
    const unsplashAPI = "https://api.unsplash.com";
    const searchPhotos = `${unsplashAPI}/search/photos`;
    const client_id =
      "dbd5a4c528627ee334419e601154fb04e65d529ed943a90e40e199e037504ca1";

    let pics = [];

    Axios.get(searchPhotos, {
      params: {
        client_id,
        query: "wallpaper",
        per_page: 30
      }
    })
      .then(response => {
        pics = response.data.results;
        console.log(pics);
        this.setState({ pics, loading: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getPic();
  }

  render() {
    if (this.state.loading === true) {
      return <h3>Loading</h3>;
    }

    return (
      <div className="App">
        <ul>
          {this.state.pics.map((pic, index) => (
            <Pic key={index} src={pic.urls.regular} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
