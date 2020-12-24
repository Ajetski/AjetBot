const Discord = require('discord.js');
const fs = require('fs');

const regex = /^!wojack$/i;

const func = (msg) => {

	if(msg.channel.id !== process.env.WOJACK_CHANNEL) {
		msg.reply(`Wojack commands can only be used in <#${process.env.WOJACK_CHANNEL}>`);
	}
	else{
		const wojacksPath = './media/Wojacks/';
		const files = fs.readdirSync(wojacksPath);
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const attachment = new Discord.MessageAttachment(wojacksPath + chosenFile);
		msg.channel.send(attachment);
	}
};

module.exports = {
	regex,
	func
};