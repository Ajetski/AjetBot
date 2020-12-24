const Discord = require('discord.js');

const regex = /^!labs$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/labs.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};