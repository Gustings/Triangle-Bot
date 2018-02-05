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
    if (message.content === '?info') {
                message.channel.send('**AbortedBot Info** *Version: 1.0.2*
                                    /n**Creator:** Gustings #2804
                                    /n**Contributors:
                                    /nAndresen #3830 - 
                                    /nBigseth #7672 - Moral support
                                    /n**Website:**
                                    /n('-SOON-')

        
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
