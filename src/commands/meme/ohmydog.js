const Discord = require('discord.js');

const regex = /^!ohmydog$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/arf.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};