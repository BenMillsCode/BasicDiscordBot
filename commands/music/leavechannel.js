const command = require('discord.js-commando');

class leaveChannel extends command.Command {

  constructor(client){
    super(client,{
      name: 'leave',
      group: 'music',
      memberName: 'leave',
      description: 'Gets the bot to leave the channel'
    });
  }

  async run(message, args) {
    //Checks if the person trying to get the bot to leave is in the voice channel
    if(message.member.voiceChannel) {
      //Clears queue if songs are playing and theres more songs in the queue

      //Bot then leaves
      message.member.voiceChannel.leave();
      message.channel.send("Aight imma bounce :wave::wave:");

      //Sets the bot voice channel status to true (used for other commands)
      global.voiceChannelStatus = false;
    }
    else {
      //If the user isn't in the voice channel send an error message
      message.reply("Must be in the voice chat to kick me out, bro :unamused:");
    }
  }
}
module.exports = leaveChannel;
