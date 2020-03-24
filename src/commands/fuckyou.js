const Discord = require('discord.js');

const regex = /^!fuckyou$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/rickFlip.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};