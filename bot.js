const Discord = require('discord.js');
const client = new Discord.Client();

client.on('owners', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?owners') {
    	message.replay('The Owners of this server are Andresen and Bigseth');
    }
});

client.on('creators', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?abortedbot') {
    	message.reply('This is the official Aborted Discord Bot! Created by gustings and Andresen');
  	}
});

client.on('help', () => {
    console.log('Ready to execute!');
});
client.on('message', message => {
    if (message.content === '?help') {
        message.channel.send('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
        message.channel.send('|                                                          |');
        message.channel.send('|                                                          |');
        message.channel.send('|                                                          |');
        message.channel.send('|                                                          |');
        message.channel.send('||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
