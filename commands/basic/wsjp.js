const command = require('discord.js-commando');
const fs = require('fs');

class Wsjp extends command.Command {

  constructor(client){
    super(client,{
      name: 'wsjp',
      group: 'basic',
      memberName: 'wsjp',
      description: 'What Overwatch player should James play?'
    });
  }

  async run(message, args){

    var jamesMainsData = fs.readFileSync(__dirname + '/resources/james_mains.json');
    var jamesMains = JSON.parse(jamesMainsData);

    var randInt = Math.floor(Math.random() * 7);
    
    message.channel.send(jamesMains[randInt].name);
  }
}
module.exports = Wsjp;
