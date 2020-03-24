const Discord = require('discord.js');

const regex = /^!kermit$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/kermitHM.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};