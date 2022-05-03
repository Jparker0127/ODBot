const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({

    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]

});

const prefix = '!';
client.once('ready', () => {
    console.log('ODB is online!');
});

client.on('messageCreate', (message) =>{
    if (message.content === 'ping'){
        message.reply('pong')
    }
});


client.login(process.env.TOKEN);