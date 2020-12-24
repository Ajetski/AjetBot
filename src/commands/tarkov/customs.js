const Discord = require('discord.js');

const regex = /^!customs$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/customs.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};