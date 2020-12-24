const Discord = require('discord.js');

const regex = /^!trump$|^!drump$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/drump.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};