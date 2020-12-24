const Discord = require('discord.js');

const regex = /^!snowman$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/snowman.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};
