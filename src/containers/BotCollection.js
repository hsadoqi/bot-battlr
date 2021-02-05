import React, { Component } from "react";

class BotCollection extends Component {
  //your code here
  
  
  render() {

    

    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          Collection of all bots
          {/* {this.props.bots.map( bot =>  */}
          {/* {<img key={bot.id} src={bot.avatar_url}/>,
          <h3>{bot.name}</h3>}

          )} */}
          {this.props.bots.map(bot => <img key={bot.avatar_url} src={bot.avatar_url} alt="bot"/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
