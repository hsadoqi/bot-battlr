import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"

class BotsPage extends Component {
  constructor() {
    super()
    this.state ={
        bots:[]
    }
}


  fetchBots = () =>
  {
    fetch("http://localhost:6001/bots")
      .then(response => response.json())
      .then(response => this.setState({bots: response}, console.log(this.state))
      )
     
  }

  componentDidMount(){
    this.fetchBots()
  }
  render() {
    return <div>
      <BotCollection bots={this.state.bots}/>,
      <YourBotArmy/>
    </div>;
  }
}

export default BotsPage;
