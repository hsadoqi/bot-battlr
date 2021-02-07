import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {

  state = {
    botsCollection: [],
    botArmyCollection: []
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

  addBotToArmy = (event) => {

    // checks YourBotArmy for the clicked bot
    const botNotFound = !this.state.botArmyCollection.find(e => e.id === parseInt(event.currentTarget.id))
    // grabs the clicked bot from BotCollection
    const botArmyAddition = this.state.botsCollection.find(e => e.id === parseInt(event.currentTarget.id))

    if (botNotFound) {
      this.setState({
        botsCollection: [...this.state.botsCollection],
        botArmyCollection: [...this.state.botArmyCollection, botArmyAddition]
      })
    }
  }

  removeBotFromArmy = (event) => {
    
    // callback for use in .findIndex; returns the element that matches the condition
    const botIdsMatch = (element) => {
      return element.id === parseInt(event.currentTarget.id)
    }
    
    // finds the index of the element returned from the callback
    const botIndex = this.state.botArmyCollection.findIndex(botIdsMatch)

    if (botIndex != -1) {
      this.setState({
        botsCollection: [...this.state.botsCollection],
        botArmyCollection: [...this.state.botArmyCollection.slice(0, botIndex), ...this.state.botArmyCollection.slice(botIndex + 1)]
      })
    }
  }

  render() {
    return(
      <div>
        <BotCollection botsCollection={this.state.botsCollection} addBotToArmy={this.addBotToArmy.bind(this)}/>
        <YourBotArmy botArmyCollection={this.state.botArmyCollection} removeBotFromArmy={this.removeBotFromArmy.bind(this)} />
      </div>
    )
  }
}

export default BotsPage;
