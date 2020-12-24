const Discord = require('discord.js');

const regex = /^!moon2l$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/moon2l.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};