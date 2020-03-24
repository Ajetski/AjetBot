const Discord = require('discord.js');

const regex = /^!shoreline$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/shoreline.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};