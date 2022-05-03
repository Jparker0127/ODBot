const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({

    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]

});

const prefix = '!';
client.once('ready', () => {
    console.log('ODB is online!');
});

client.on('messageCreate', (message) =>{
    if (message.content === 'ping'){
        message.reply('pong');
    }
});

client.on('messageCreate', (message) =>{
    if (message.content === 'chad'){
        message.reply('is a cuck');
    }
});

const generalChannelID = '526971309188448273'

client.on("guildMemberAdd", (member) =>{
    member.guild.channels.cache.get(generalChannelID).send(`<@${member.id}> Welcome to the server!`)
});

client.login(process.env.TOKEN);