import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  //start here with your code for step one

  constructor(props) {
    super(props);
    this.state = {
      bots: []
    }
  }

  componentDidMount() {
    this.fetchBots()
  }

  fetchBots = () => {
    
    fetch('http://localhost:6001/bots')
      .then(res => res.json())
      .then(data => this.setState({ bots: data.map(bot => ({ avatar: bot.avatar_url, name: bot.name})) }));
    
  }
  

  
  render() {
    // const botsCollection = this.state.bots.map(bot => (
    //   <div key={bot.id}>
    //       <img>{bot.avatar_url} </img>
    //       <h3>{bot.name}</h3>
    //   </div>
    // ))
    // console.log(botsCollection)
    
    return <div>{/* put your components here */}
      <YourBotArmy />
      <BotCollection fetchBots = {this.state.bots} />
  
    </div>;
  }
}

export default BotsPage;
