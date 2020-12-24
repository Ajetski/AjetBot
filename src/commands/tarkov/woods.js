const Discord = require('discord.js');

const regex = /^!woods$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/tarkov/woods.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};