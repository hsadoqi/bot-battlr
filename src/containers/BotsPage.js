import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {

  constructor(){
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:6001/bots`)
    .then(res => res.json())
    .then(bots => this.setState({ bots }))
  }

  addBotToArmy = (armyBot) => {
    if(!this.state.botArmy.find(bot => bot === armyBot)){
      const foundBot = this.state.bots.find(bot => bot === armyBot)
      this.setState((state) => ({
        botArmy: [...state.botArmy, foundBot]
      }))
    } 
  }

  dischargeBot = (armyBot) => {
    const botArmy = this.state.botArmy.filter(bot => bot !== armyBot)
    this.setState({ botArmy })
  }

  dischargeForever = (armyBot) => {
    // debugger
    if(this.state.botArmy.find(bot => bot === armyBot)){
      const bots = this.state.bots.filter(bot => bot !== armyBot)
      const botArmy = this.state.botArmy.filter(bot => bot !== armyBot)

      this.setState({ bots, botArmy })

      fetch(`http://localhost:6001/bots/${armyBot.id}`, {
        method: 'DELETE'
      })
    } else {
      console.log("not even enlisted")
    }
  }

  render() {
    return (<div>
      <YourBotArmy bots={this.state.botArmy} dischargeBot={this.dischargeBot} dischargeForever={this.dischargeForever}/>
      <BotCollection bots={this.state.bots} addBot={this.addBotToArmy} dischargeForever={this.dischargeForever}/>
    </div>);
  }
}

export default BotsPage;
