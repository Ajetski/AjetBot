const Discord = require('discord.js');

const regex = /^!nani$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/nani.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};