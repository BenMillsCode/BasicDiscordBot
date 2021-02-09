const command = require('discord.js-commando');
const ytdl = require('ytdl-core');

function play(voiceChat, message, args) {

  var voiceConnection = message.member.voiceChannel.connection

  voiceChat.dispatcher = voiceConnection.playStream(ytdl(voiceChat.queue[0], {filter: "audioonly"}));
  ytdl.getInfo(voiceChat.queue[0], function(err, info) {
      if (err) throw err;
        message.channel.send(":musical_note: Now Playing: " + info.title + " :musical_note:");
      }
  );

  voiceChat.dispatcher.on("end", function(){
    voiceChat.queue.shift();
    if(voiceChat.queue.length != 0){play(voiceChat, message);}
  });
}

class playYTMusic extends command.Command {

  constructor(client){
    super(client,{
      name: 'play',
      group: 'music',
      memberName: 'play',
      description: 'Plays music off YouTube \
                    \n \t Enter \"!play next\" to skip to the next song \
                    \n \t Enter \"!play clear\" to clear the queue '
    });
  }

  async run(message, args) {

    if (global.voiceChannelStatus == false) {

      message.reply("I need to be in a voice channel to play music :unamused:");
    } else if (global.voiceChannelStatus == true) {

      if (!args){
        message.channel.send("Please give me a YouTube Link :blush:");
      } else{

        if (!voiceChats[message.member.voiceChannel.name]){
          voiceChats[message.member.voiceChannel.name] = {queue: []};
        }
        var voiceChat = voiceChats[message.member.voiceChannel.name];

        if (voiceChat.dispatcher && args == "next"){

          voiceChat.dispatcher.end();

        } else if (voiceChat.dispatcher && args == "clear") {

          voiceChat.queue = [];
          voiceChat.dispatcher.end();
        } else if (args.includes("youtube")) {
          if(voiceChat.queue.length == 0){

            voiceChat.queue.push(args);
            play(voiceChat, message);
          }
          else {

            voiceChat.queue.push(args);
          } 
        } else {
          message.reply("You need to enter a Youtube Link, next or clear");
        }
      }
    }
  }
}
module.exports = playYTMusic;
