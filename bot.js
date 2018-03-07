const Discord = require('discord.js');
const client = new Discord.Client();

// invite
client.on('invite', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === ';invite') {
    	message.channel.send('The Aborted Discord: https://discord.gg/qne8NsS');
  	}
});    

// rekt
client.on('rekt', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === ';rekt') {
    	message.channel.send('@156497366130622464');
  	}
});    
// rekt
client.on('rekt', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === ';rekt') {
    	message.channel.send('@156497366130622464');
  	}
});    
// rekt
client.on('rekt', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === ';rekt') {
    	message.channel.send('@156497366130622464');
  	}
});    
// rekt
client.on('rekt', () => {
    console.log('Ready to execute!');
});

client.on('message', message => {
    if (message.content === ';rekt') {
    	message.channel.send('@156497366130622464');
  	}
});    
        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
