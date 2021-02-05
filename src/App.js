import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import BotsCollection from './containers/BotCollection'
class App extends Component {
  render() {
    return (
      <div className="App">
        <BotsCollection />
      </div>
    );
  }
}

export default App;
