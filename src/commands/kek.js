const Discord = require('discord.js');

const regex = /^!kek$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/kek.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};