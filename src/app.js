/*
Author: Adam Jeniski
Project: AjetBot
File: src/index.js

GitHub Repo: https://github.com/Ajetski/AjetBot

Documentation Referenced: https://discord.js.org/

*/

const Discord = require('discord.js');
const path = require('path');
const fs = require('fs');

const commands = require('./index');
require('dotenv').config();

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN).catch((err) => {
	console.log('Error:', err);
});

client.once('ready', () => {
	console.log('Working!!!');
	client.channels.fetch(process.env.DEFAULT_CHANNEL)
		.then((genchat) => {
			genchat.send('I\'m up!');
		})
		.catch(() => {
			console.log('Did not find a channel with matching ID');
		});
	client.guilds.fetch(process.env.SERVER_ID)
		.then(guild => {
			function nameChange() {
				const fileName = path.join(__dirname, '../media/names.txt')
				const people = JSON.parse(fs.readFileSync(fileName).toString());
				Object.keys(people).forEach(userID => {
					if (people[userID].enabled) {
						guild.members.fetch(userID)
							.then(member => {
								const index = Math.floor(Math.random() * people[userID].names.length);
								member.setNickname(people[userID].names[index]);
							})
							.catch(console.error);
					}
				});
				let randomTime = Math.round(Math.random() * (60000 - 10000 + 1)) + 10000;
				setTimeout(nameChange, randomTime);
			}
			nameChange();
		})
		.catch(console.error);
});

client.on('message', msg => {
	console.log(`message: "${msg.content}"`);

	commands.forEach((command) => {
		if (msg.content.match(command.regex)) {
			command.func(msg);
		}
	});
});