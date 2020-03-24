const Discord = require('discord.js');

const regex = /^!bigbrain$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/bigBrain.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};