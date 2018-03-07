const Discord = require('discord.js');
const client = new Discord.Client();

// Website
client.on('test', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === ';invite') {
    	message.channel.send('The Aborted Discord: https://discord.gg/qne8NsS');
  	}
});    
        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
