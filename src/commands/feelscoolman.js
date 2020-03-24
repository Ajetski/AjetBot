const Discord = require('discord.js');

const regex = /^!feelscoolman$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/feelCool.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};