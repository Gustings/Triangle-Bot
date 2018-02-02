const Discord = require('discord.js');
const client = new Discord.Client();

client.on('owners', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === 'Owners') {
    	message.channel.send('The Owners of this server are Andresen and Bigseth');
    }
});

client.on('creators', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === 'AbortedBot') {
    	message.reply('This is the official Aborted Discord Bot! Created by @gustings#2804 and @Andresen#3830');
  	}
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
