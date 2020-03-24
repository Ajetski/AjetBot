const Discord = require('discord.js');

const regex = /^!ohmygod$|^!slayer$|^!gnome$|^!god$/i;

const func = (msg) => {
	const attachment = new Discord.MessageAttachment('./src/media/rsGnome.png');
	msg.channel.send(attachment);
};

module.exports = {
	regex,
	func
};