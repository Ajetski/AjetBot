const Discord = require('discord.js');

const regex = /^!pregario$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/pregario.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};