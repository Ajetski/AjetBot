const Discord = require('discord.js');

const regex = /^!ree$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/ree.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};