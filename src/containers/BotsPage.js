import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {

  state = {
    botsCollection: []
  }

  componentDidMount() {

    // fetching all bots and adding them to the botsCollection array in state

    fetch("http://localhost:6001/bots")
    .then(res => res.json())
    .then(data => {
      return(
        data.map((bot, index) => {
          this.setState({
            botsCollection: [...this.state.botsCollection, bot]
          })
        })
      )
    })
  }

  render() {
    return(
      <div>
        <BotCollection botsCollection={this.state.botsCollection} />
        <YourBotArmy />
      </div>
    )
  }
}

export default BotsPage;
