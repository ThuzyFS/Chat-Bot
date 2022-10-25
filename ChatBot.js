const Discord = require('discord.js');
const voiceDiscord = require('@discordjs/voice');
const client = new Discord.Client();
const prefix = '!';
const TOKEN = 'MTAxOTMwOTQ4MjQ1MjQ2Nzc0Mg.GzstPu.jO3lSktM10YU6IISqCSHpOzD80LNihgI3hRgHQ';

client.on("ready", () => {
	console.log('Bot rodando!')
});

client.on("message", (msg) => {
	if (msg.content === 'olá') {
		msg.reply('olá!');
	}
});

client.login(TOKEN);
