import React, { Component } from "react";
import bots from '../db.json'
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'
class BotCollection extends Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot=> <BotCard bot={bot} key={bot.id} specs={<BotSpecs key={bot.id} bot={bot}/>}/>)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
