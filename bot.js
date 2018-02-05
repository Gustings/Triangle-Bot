const Discord = require('discord.js');
const client = new Discord.Client();

// Owners
client.on('owners', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?owners') {
    	message.replay('The Owners of this server are Andresen and Bigseth');
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

// Info
/*client.on('info', () => {
    console.log('Ready to execute!');
});
client.on('message', message => {
    if (message.content === '?info') {
        message.channel.send('**AbortedBot Info** *Version: 1.0.0*');
        message.channel.send('**Creator:** Gustings #2804');
        message.channel.send('**Contributors:**');
        message.channel.send('Andresen #3830 - ');
        message.channel.send('Bigseth #7672 - Moral support');
        message.channel.send('**Website:**');
        message.channel.send('-SOON-');
        
    }
}); */


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
