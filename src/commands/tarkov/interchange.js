const Discord = require('discord.js');

const regex = /^!interchange$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/interchange.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};