import React, { Component } from "react";
import BotCard from '../components/BotCard';

class BotCollection extends Component {

  renderBots = (botsCollection) => {
    // iterates over botsCollection in props then renders BotCard while passing the bot as a prop
    
    return (
      botsCollection.map((bot, index) => {
        return <BotCard bot={bot}/>
      })
    )
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {/* calls renderBots function to render BotCard components for each bot in botsCollection */}
          {this.renderBots(this.props.botsCollection)}  
        </div>
      </div>
    );
  }
}

export default BotCollection;
