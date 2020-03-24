const Discord = require('discord.js');
const fs = require('fs');

const regex = /^!pepe$/i;

const func = (msg) => {
	const files = fs.readdirSync('./media/Pepes');
	const chosenFile = files[Math.floor(Math.random()*files.length)];
	const attachment = new Discord.MessageAttachment('media/Pepes/' + chosenFile);
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};