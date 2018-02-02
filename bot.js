const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Owners') {
    	message.reply('The Owners of this server are @Andresen#3830 and @Bigseth#7672');
  	}
client.on('message', message => {
    if (message.content === 'AbortedBot') {
    	message.reply('This is the official Aborted Discord Bot! Created by @gustings#2804 and @Andresen#3830');
  	}
    
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
