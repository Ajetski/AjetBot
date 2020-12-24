const Discord = require('discord.js');

const regex = /^!cincodechevy$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./media/CincoDeChevy.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};