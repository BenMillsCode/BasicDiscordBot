const command = require('discord.js-commando');
const fs = require('fs');

class fDrop extends command.Command {

  constructor(client){
    super(client,{
      name: 'fdrop',
      group: 'basic',
      memberName: 'fdrop',
      description: 'Gives a Fornite Drop Location'
    });
  }

  async run(message, args){

    //Gets a random number for the funtion
    var randInt = Math.floor(Math.random() * 28);

    //Loads the file of Fortnite loacations
    let localeData = fs.readFileSync(__dirname + '/resources/fdrop_locations.json');
    let locations = JSON.parse(localeData);

    //Sends loaction to Discord chat also sends special message depeding on the locations
    switch (randInt) {
      case 0:
        //Message for batman house
        message.channel.send(":robot:Dropping at " + locations[randInt].name +
        " good luck with that place... :pray::pray:");
        break;

      case 25:
      case 26:
        //Messages for Tilted Towers and Paradise Palms
        message.channel.send(":robot:Dropping at " + locations[randInt].name +
        " boys, let's fucking go :point_right::ok_hand::joy::joy:");
        break;

      default:
        for(var i = 0; i < locations.length; i++){

          if(locations[i].id == randInt){
            message.channel.send(":robot:Dropping at " + locations[i].name);
          }
        }
    }
  }
}
module.exports = fDrop;
