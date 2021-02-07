import React, { Component } from "react";
import BotCard from '../components/BotCard';

class BotCollection extends Component {

  renderBotCards = (botsCollection) => {
    return (
      botsCollection.map((bot, index) => <BotCard key={index} addOrRemoveBot={this.props.addBotToArmy} bot={bot} />)
    )
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          <br />
          {this.renderBotCards(this.props.botsCollection)}  
        </div>
      </div>
    );
  }
}

export default BotCollection;
