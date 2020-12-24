const Discord = require('discord.js');

const regex = /^!sweaty$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/feelScary.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};