const Discord = require('discord.js');

const regex = /^!reserve$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/reserve.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};