const Discord = require('discord.js');
const client = new Discord.Client();

// Owners
client.on('owners', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?owners') {
    	message.reply('The Owners of this server are Andresen and Bigseth');
      }
});

// Creators
client.on('creators', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?abortedbot') {
    	message.reply('This is the official Aborted Discord Bot! Created by gustings and Andresen');
  	}
});

client.on('info', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?info') {
        message.channel.send({embed: {
           color: 3447003,
           description: "A very simple Embed!"
     }
}});
        
        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
