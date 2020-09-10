const Discord = require('discord.js');

const regex = /^!spooky$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/spooky.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};
