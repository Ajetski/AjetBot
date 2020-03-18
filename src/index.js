/*
Author: Adam Jeniski
Project: AjetBot
File: src/index.js

GitHub Repo: https://github.com/Ajetski/AjetBot

Documentation Referenced: https://discord.js.org/

*/

const Discord = require('discord.js');

const client = new Discord.Client();

require('dotenv').config();

client.login(process.env.BOT_TOKEN);

client.once('ready', () => {
	console.log('Working!!!');
});

client.on('message', msg => {
	if(msg.content.match(/^!ping$/)){
		msg.reply('pong');
	}

	if(msg.content.match(/^!ty$/)) {
		msg.channel.send('sup <@267848388735664128>');
	}

	if(msg.content.match(/^!cris$/)) {
		msg.channel.send('sup <@94188288436342784>');
	}

	if(msg.content.match(/^!john$/)) {
		msg.channel.send('sup <@340249267769835520>');
	}

	if(msg.content.match(/^!caleb$/) || msg.content.match(/^!kleb$/)) {
		msg.channel.send('sup <@215636797189914625>');
	}
});