/*
Author: Adam Jeniski
Project: AjetBot
File: src/index.js

GitHub Repo: https://github.com/Ajetski/AjetBot

Documentation Referenced: https://discord.js.org/

*/

const { exec } = require('child_process');
const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const client = new Discord.Client();

require('dotenv').config();

client.login(process.env.BOT_TOKEN).catch( (err) => {
	console.log('Error:', err);
});

client.once('ready', () => {
	console.log('Working!!!');
});

client.on('message', msg => {

	/*
	============
		TEST
	============
	*/
	if(msg.content.match(/^!ping$/)){
		msg.reply('pong');
	}

	if(msg.content.match(/^!update$/)){
		msg.reply('Updating...');
		exec('../deploy/deploy.sh');
	}

	/*
	============
		NAMES
	============
	*/

	if(msg.content.match(/^!ty$/)) {
		msg.channel.send('sup <@267848388735664128>');
	}

	if(msg.content.match(/^!cris$/)) {
		msg.channel.send('sup <@94188288436342784>');
	}

	if(msg.content.match(/^!john$/)) {
		msg.channel.send('sup <@340249267769835520>');
	}

	if(msg.content.match(/^!caleb$/) || msg.content.match(/^!kleb$/) || msg.content.match(/^!daddy$/)) {
		msg.channel.send('sup <@215636797189914625>');
	}

	if(msg.content.match(/^!nj$/)) {
		msg.channel.send('sup <@139109067527290880>');
	}

	if(msg.content.match(/^!getshiton$/)){
		msg.channel.send('░░░░░░░░░░░█▀<@' + msg.author.id + '>█░░░░\n░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░\n░░░░░░█░█░░░░░░░░░░▐░░░\n░░░░░░▐▐░░░░░░░░░▄░▐░░░\n░░░░░░█░░░░░░░░▄▀▀░▐░░░\n░░░░▄▀░░░░░░░░▐░▄▄▀░░░░\n░░▄▀░░░▐░░░░░█▄▀░▐░░░░░\n░░█░░░▐░░░░░░░░▄░█░░░░░\n░░░█▄░░▀▄░░░░▄▀▐░█░░░░░\n░░░█▐▀▀▀░▀▀▀▀░░▐░█░░░░░\n░░▐█▐▄░░▀░░░░░░▐░█▄▄░░░\n░░░▀▀░  <@152850062228193280>  ░░░▐▄▄▄▀░░░\n░░░░░░░░░░░░░░░░░░░░░░░');
	}
	/*
	============
		MEMES
	============
	*/

	if(msg.content.match(/^!pogchamp$/) || msg.content.match(/^!poggers$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pogChamp.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!pogchump$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pogChump.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!bigbrain$/)){
		const attachment = new Discord.MessageAttachment('./src/media/bigBrain.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!feelsbadman$/)){
		const attachment = new Discord.MessageAttachment('./src/media/feelBad.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!ree$/)){
		const attachment = new Discord.MessageAttachment('./src/media/ree.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!trump$/) || msg.content.match(/^!drump$/)){
		const attachment = new Discord.MessageAttachment('./src/media/drump.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!feelscoolman$/)){
		const attachment = new Discord.MessageAttachment('./src/media/feelCool.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!sweaty$/)){
		const attachment = new Discord.MessageAttachment('./src/media/feelScary.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!kek$/)){
		const attachment = new Discord.MessageAttachment('./src/media/kek.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!kermit$/)){
		const attachment = new Discord.MessageAttachment('./src/media/kermitHM.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!nani$/)){
		const attachment = new Discord.MessageAttachment('./src/media/nani.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!fuckyou$/)){
		const attachment = new Discord.MessageAttachment('./src/media/rickFlip.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!ohmydog$/)){
		const attachment = new Discord.MessageAttachment('./src/media/arf.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!coolnoah$/)){
		const attachment = new Discord.MessageAttachment('./src/media/coolDoge.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!dawae$/) || msg.content.match(/^!penguin$/)){
		const attachment = new Discord.MessageAttachment('./src/media/echidna.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!ohmygod$/) || msg.content.match(/^!slayer$/) || msg.content.match(/^!gnome$/) || msg.content.match(/^!god$/)){
		const attachment = new Discord.MessageAttachment('./src/media/rsGnome.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!geckw$/)){
		const attachment = new Discord.MessageAttachment('./src/media/geckw.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!moon2l$/)){
		const attachment = new Discord.MessageAttachment('./src/media/moon2l.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!pregigi$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pregigi.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!pregario$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pregario.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!moon2boo$/)){
		const attachment = new Discord.MessageAttachment('./src/media/moon2Boo.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!poggy$/)){
		const attachment = new Discord.MessageAttachment('./src/media/moon2poggy.png');
		msg.channel.send(attachment);
	}

	if(msg.content.match(/^!illuminati$/)){
		const attachment = new Discord.MessageAttachment('./src/media/illuminati.png');
		msg.channel.send(attachment);
	}
	
	if(msg.content.match(/^!wojack$/)){

		const wojacksPath = path.join(process.cwd(), 'src/media/Wojacks');
		const files = fs.readdirSync(wojacksPath);
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const attachment = new Discord.MessageAttachment(path.join(wojacksPath, chosenFile));
		msg.channel.send(attachment);
	}
	else if(msg.content.match(/^!pepe$/)){
		const files = fs.readdirSync(path.join(__dirname,'media/Pepes'));
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const attachment = new Discord.MessageAttachment(path.join(__dirname, 'media/Pepes/', chosenFile));
		msg.channel.send(attachment);
	}
	else if(msg.content.match(/^!feelinglucky$/)){
		const files = fs.readdirSync(path.join(__dirname,'media/Asciiart'));
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const data = fs.readFileSync(path.join(__dirname, 'media/Asciiart/', chosenFile));
		msg.channel.send(data.toString());
	}

});
