const Discord = require('discord.js');
const client = new Discord.Client();

// Test
client.on('test', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === '?test') {
    	message.channel.send('Test Complete');
  	}
});   
        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
