const command = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new command.Client();

bot.login(TOKEN);

bot.on('ready', function(){

  //A global variable used to tell if the bots in a voice channel
  global.voiceChannelStatus = false;
  global.voiceChats = {};

  //Shows in the console that the bot is up and running
  console.log('Ready');
});

//Registering new custom commands
bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');
