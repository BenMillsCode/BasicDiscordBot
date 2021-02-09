const command = require('discord.js-commando');

class tts extends command.Command {

  constructor(client){
    super(client,{
      name: 'tts',
      group: 'basic',
      memberName: 'tts',
      description: 'Just repeats what you enter using text to speech'
    });
  }

  async run(message, args){

    message.channel.send(args, {
      tts: true
    })
  }
}
module.exports = tts;
