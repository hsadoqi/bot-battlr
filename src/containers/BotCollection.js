import React, { Component } from "react";
// import bots from '../db.json'
// import BotCard from '../components/BotCard'
// import BotSpecs from '../components/BotSpecs'
import BotsPage from './BotsPage'
import YourBotArmy from './YourBotArmy'
class BotCollection extends Component {
  //your code here
constructor(){
  super();
  this.state = {
    allBots : [],
    ownedBots : []


  }
}

 addingFaveBot = (bot) => {
  this.setState({
    ownedBots: [...this.state.ownedBots, bot]
  })
}
render() {
    const allBots = () => {
      this.props.bots[0].map(bot=>
        this.state.allBots.push(bot))
    }
   console.log(this.props.bots[0])
   allBots()
   console.log(this.state.allBots)
    return (
      
      <div className="ui four column grid">
        <div><YourBotArmy bots={this.state.ownedBots}/></div>
        {this.props.bots[0].map(bot => {
         return <BotsPage bot={bot} addingFaveBot={this.addingFaveBot}/>
          // return <div>
          
        //    <BotsPage />
        //    <BotCard bot={bot}/>
        //    <BotSpecs bot={bot}/>
        //    </div>})
  } ) }
         <div className="row">
          Collection of all bots
        </div>
      </div>
    );
  
 }
}


export default BotCollection;
