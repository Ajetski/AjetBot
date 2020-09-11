const Discord = require('discord.js');

const regex = /^!pogchip$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/pogchip.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};
