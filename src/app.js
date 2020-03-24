/*
Author: Adam Jeniski
Project: AjetBot
File: src/index.js

GitHub Repo: https://github.com/Ajetski/AjetBot

Documentation Referenced: https://discord.js.org/

*/

const Discord = require('discord.js');

const commands = require('./index');
require('dotenv').config();

const client = new Discord.Client();

console.log(process.env.BOT_TOKEN);

client.login(process.env.BOT_TOKEN).catch( (err) => {
	console.log('Error:', err);
});

client.once('ready', () => {
	console.log('Working!!!');
	client.channels.fetch(process.env.DEFAULT_CHANNEL)
		.then( (genchat) => {
			genchat.send('I\'m up!');
		})
		.catch( () => {
			console.log('Did not find a channel with matching ID');
		});
});

client.on('message', msg => {
	console.log(`message: "${msg.content}"`);

	commands.forEach((command) => {
		if(msg.content.match(command.regex)){
			command.func(msg);
		}
	});
});
