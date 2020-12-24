const Discord = require('discord.js');

const regex = /^!chevinator$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/Chevinator.PNG');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};