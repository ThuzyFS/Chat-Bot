const Discord = require('discord.js');
const client = new Discord.Client();

const TOKEN = '';

client.on("ready", () => {
    console.log('Bot rodando');
});

client.on("message", (msg) => {

});

client.login(TOKEN);