const Discord = require('discord.js');

const regex = /^!coolnoah$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/coolDoge.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};