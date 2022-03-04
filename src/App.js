import "./App.css";

import React, { Component } from "react";
import Joke from "./components/Joke/Joke";

export class App extends Component {
  state = {
    posts: [],
  };

  updateJokes = async () => {
    let posts = []
    for (let i = 0; i < 5; i++) {
      posts.push(fetch("https://api.chucknorris.io/jokes/random").then(res => res.json()))
    }
    let res = await Promise.all(posts);
    this.setState({ posts: res });
  }

  async componentDidMount() {
    this.updateJokes()
  }
  
  render() {
    return (
      <div className="app">
        <button className="add" onClick={this.updateJokes}>Добавить шутку</button>
        {this.state.posts.map((post) => {
          return (
            <Joke key={post.id} joke={post.value} />
          )
        })}
      </div>
    );
  }
}

export default App;