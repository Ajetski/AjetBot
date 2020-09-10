const Discord = require('discord.js');

const regex = /^!gayboy$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/gayboy.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};
