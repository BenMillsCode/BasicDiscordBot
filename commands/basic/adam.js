const command = require('discord.js-commando');

class Adam extends command.Command {

  constructor(client){
    super(client,{
      name: 'adam',
      group: 'basic',
      memberName: 'adam',
      description: 'Gives a bio for Adam, he\'s a fucktard'
    });
  }

  async run(message, args){
    var user = message.author;

    message.channel.send('Adam Rose? More like billy bullshitter', {
      tts: true
    })
  }
}
module.exports = Adam;
