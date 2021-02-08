import React, { Component } from "react";
import BotCard from '../components/BotCard';

class YourBotArmy extends Component {

  // componentDidUpdate() {
  //   this.renderBotArmy(this.props.botArmyCollection)
  // }

  renderBotArmy = botArmyCollection => {

    return(
      botArmyCollection.map((bot, index) => <BotCard key={index} bot={bot} addOrRemoveBot={this.props.removeBotFromArmy} removeBotFromAll={this.props.removeBotFromAll} />)
    )
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            <br />
            {this.renderBotArmy(this.props.botArmyCollection)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
