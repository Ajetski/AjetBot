const Discord = require('discord.js');

const regex = /^!pogchamp$|^!poggers$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/pogChamp.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};