import React from "react";


const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star"
};
const BotSpecs = props => {
  let addingToFaves = (bot) => {
   props.addToFaves(bot)
   }
  
   let addToArmy = (bot) => {
    fetch('http://localhost:6001/fave_bots', {
     method: 'POST',
     headers: {
       'Content-Type':'application/json',
       'Accept':'application/json'
       
      },
      body: JSON.stringify({
              "name": bot.name,
              "bot_class": bot.bot_class,
              "damage": bot.damage,
              "armor": bot.armor,
             "health": bot.health,
             "catchphrase": bot.catchphrase,
             "avatar_url": bot.avatar_url,
             "bot_id": bot.id
             
             
             
            })
          }) 
          .then(res=> res.json())
          .then(json=> addingToFaves(json))
          .catch(err=> console.log(err))
        }
        

        
        return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={props.bot.avatar_url}
              />
          </div>
          <div className="four wide column">
            <h2>Name: {props.bot.name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {props.bot.catchphrase}
            </p>
            <strong>
              Class: {props.bot.bot_class}
              <i className={botTypeClasses[props.bot.bot_class]} />
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{props.bot.health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{props.bot.damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{props.bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("Didn't add this functionality")
              
              }
              >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                addToArmy(props.bot)                
              }
              //onClick={()=> console.log(props)}
              >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
