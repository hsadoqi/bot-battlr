import React, { Component } from "react";

class BotCollection extends Component {

  constructor(props){
    super()
     this.state= {
       bots: []
     }
  }

  componentDidMount(){
    
    const BASE_URL = "http://localhost:6001/bots"
      fetch(BASE_URL)
      .then(response => response.json())
      .then(bots => {
        // console.log(bots)
        this.setState({
          bots: bots
          
        })
      })
    
  }
  
  render() {
    const { bots } = this.state
    // console.log(bots)
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot =>{
            console.log(bot.name)
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
