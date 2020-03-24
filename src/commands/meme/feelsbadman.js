const Discord = require('discord.js');

const regex = /^!feelsbadman$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/feelBad.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};