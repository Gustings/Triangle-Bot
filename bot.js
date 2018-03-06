const Discord = require('discord.js');
const client = new Discord.Client();

// Creator
client.on('creator', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?creator') {
    	message.reply('This is the official Aborted Discord Bot! Created by Gustings');
  	}
});    

// 
client.on('creator', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?creator') {
    	message.reply('This is the official Aborted Discord Bot! Created by Gustings');
  	}
});    

        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
