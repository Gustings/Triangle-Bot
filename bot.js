const Discord = require('discord.js');
const client = new Discord.Client();

client.on('owners', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === 'a!owners') {
    	message.channel.send('The Owners of this server are Andresen and Bigseth');
    }
});

client.on('creators', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === 'a!abortedbot') {
    	message.reply('This is the official Aborted Discord Bot! Created by gustings and Andresen');
  	}
});

client.on('dab', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === 'a!dab') {
    	message.reply(':dab: :dab: :dab: :dab: :dab: :dab:');
  	}
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
