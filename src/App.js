import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import BotsCollection from './containers/BotCollection'
import bots from './db.json'



class App extends Component {

  render() {
    const botArr = Object.values(bots)
    const myArr = botArr[0]
    // console.log(botArr[0].map(dies=> console.log(dies)))
    return (
    <div className="App">
        
        <BotsCollection bots={botArr} />
          
        </div>  
      )
    }
  }

export default App;
