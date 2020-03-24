const Discord = require('discord.js');

const regex = /^!pogchump$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/pogChump.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};