const Discord = require('discord.js');

const regex = /^!pregigi$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/pregigi.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};