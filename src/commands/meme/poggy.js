const Discord = require('discord.js');

const regex = /^!poggy$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/moon2poggy.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};