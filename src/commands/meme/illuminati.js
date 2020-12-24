const Discord = require('discord.js');

const regex = /^!illuminati$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/illuminati.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};