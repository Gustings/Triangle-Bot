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

//Embed
case "?embed":
    var embed = new Discord.RichEmbed()
        .addField("Title", "Description")
    message.channel.send({embed});
        // .catch(console.error);
    break;

        
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
