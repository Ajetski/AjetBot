const Discord = require('discord.js');

const regex = /^!dawae$|^!penguin$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./src/media/echidna.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};