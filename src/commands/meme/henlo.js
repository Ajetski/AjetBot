const Discord = require('discord.js');

const regex = /^!henlo$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/warpedboi.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};
