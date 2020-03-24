const Discord = require('discord.js');

const regex = /^!factory$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/factory.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};