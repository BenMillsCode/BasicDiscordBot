const command = require('discord.js-commando');

class joinChannel extends command.Command {

  constructor(client){
    super(client,{
      name: 'join',
      group: 'music',
      memberName: 'join',
      description: 'Gets the bot to join the channel'
    });
  }

  async run(message, args) {
    //Checks if the person trying to get the bot to join is in the voice channel
    if(message.member.voiceChannel) {
      //Bot joins the voice channel
      message.member.voiceChannel.join()
        .then(connection =>{
          message.channel.send(":robot:In the channel boiiiissss :sunglasses:");
          //Sets the bot voice channel status to true (used for other commands)
          global.voiceChannelStatus = true;
        })
    }
    else {
      //If the user isn't in the voice channel send an error message
      message.reply(":robot:Please join a voice channel then add me :unamused:");
    }
  }
}
module.exports = joinChannel;
