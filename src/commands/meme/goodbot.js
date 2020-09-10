const Discord = require('discord.js');

const regex = /^!goodbot$/i;

const func = (msg) => {
	msg.channel.send(':joy: kill yourself');
};

module.exports = {
	regex,
	func
};
