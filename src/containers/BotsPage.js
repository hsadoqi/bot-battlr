import React, { Component } from "react";
 import BotCollection from './BotCollection'
 import bots from '../db.json'
 import BotCard from '../components/BotCard'
import BotSpecs from "../components/BotSpecs";

class BotsPage extends Component {
  //start here with your code for step one
  
  render() {
   
    const bot= this.props.bot
    
    
    return (
      <div>
          
  
    <BotCard bot={bot}/>
    <BotSpecs addToFaves={this.props.addingFaveBot} bot={bot}/>
   </div> )
    
  }
}

export default BotsPage;
