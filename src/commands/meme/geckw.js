const Discord = require('discord.js');

const regex = /^!geckw$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/geckw.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};