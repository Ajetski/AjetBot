const Discord = require('discord.js');

const regex = /^!moon2boo$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/moon2Boo.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};