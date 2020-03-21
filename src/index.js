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
const axios = require('axios');

require('dotenv').config();

client.login(process.env.BOT_TOKEN).catch( (err) => {
	console.log('Error:', err);
});

client.once('ready', () => {
	console.log('Working!!!');
	client.channels.fetch(process.env.DEFAULT_CHANNEL)
		.then( (genchat) => {
			genchat.send('I\'m up!');
		})
		.catch( () => {
			console.log('Did not find a channel with matching ID');
		});
});

client.on('message', msg => {

	const cont = msg.content.toLowerCase();

	/*
	============
		TEST
	============
	*/
	if(cont.match(/^!ping$/)){
		msg.reply('pong');
	}

	if(cont.match(/^!update$/)){
		msg.reply('Updating...');
		exec(`node "${path.join(__dirname,'../deploy/deploy.js')}`, () => {
			process.exit();
		});
	}

	/*
	============
		NAMES
	============
	*/

	if(cont.match(/^!ty$/)) {
		msg.channel.send('sup <@267848388735664128>');
	}

	if(cont.match(/^!cris$/)) {
		msg.channel.send('sup <@94188288436342784>');
	}

	if(cont.match(/^!john$/)) {
		msg.channel.send('sup <@340249267769835520>');
	}

	if(cont.match(/^!caleb$/) || cont.match(/^!kleb$/) || cont.match(/^!daddy$/)) {
		msg.channel.send('sup <@215636797189914625>');
	}

	if(cont.match(/^!nj$/)) {
		msg.channel.send('sup <@139109067527290880>');
	}

	if(cont.match(/^!getshiton\s$/)){
		msg.channel.send('░░░░░░░░░░░█▀<@' + msg.author.id + '>█░░░░\n░░░░░░▄▀▀▀▀░░░░░█▄▄░░░░\n░░░░░░█░█░░░░░░░░░░▐░░░\n░░░░░░▐▐░░░░░░░░░▄░▐░░░\n░░░░░░█░░░░░░░░▄▀▀░▐░░░\n░░░░▄▀░░░░░░░░▐░▄▄▀░░░░\n░░▄▀░░░▐░░░░░█▄▀░▐░░░░░\n░░█░░░▐░░░░░░░░▄░█░░░░░\n░░░█▄░░▀▄░░░░▄▀▐░█░░░░░\n░░░█▐▀▀▀░▀▀▀▀░░▐░█░░░░░\n░░▐█▐▄░░▀░░░░░░▐░█▄▄░░░\n░░░▀▀░  <@152850062228193280>  ░░░▐▄▄▄▀░░░\n░░░░░░░░░░░░░░░░░░░░░░░');
	}
	/*
	============
		MEMES
	============
	*/

	if(cont.match(/^!pogchamp$/) || cont.match(/^!poggers$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pogChamp.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!pogchump$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pogChump.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!bigbrain$/)){
		const attachment = new Discord.MessageAttachment('./src/media/bigBrain.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!feelsbadman$/)){
		const attachment = new Discord.MessageAttachment('./src/media/feelBad.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!ree$/)){
		const attachment = new Discord.MessageAttachment('./src/media/ree.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!trump$/) || cont.match(/^!drump$/)){
		const attachment = new Discord.MessageAttachment('./src/media/drump.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!feelscoolman$/)){
		const attachment = new Discord.MessageAttachment('./src/media/feelCool.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!sweaty$/)){
		const attachment = new Discord.MessageAttachment('./src/media/feelScary.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!kek$/)){
		const attachment = new Discord.MessageAttachment('./src/media/kek.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!kermit$/)){
		const attachment = new Discord.MessageAttachment('./src/media/kermitHM.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!nani$/)){
		const attachment = new Discord.MessageAttachment('./src/media/nani.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!fuckyou$/)){
		const attachment = new Discord.MessageAttachment('./src/media/rickFlip.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!ohmydog$/)){
		const attachment = new Discord.MessageAttachment('./src/media/arf.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!coolnoah$/)){
		const attachment = new Discord.MessageAttachment('./src/media/coolDoge.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!dawae$/) || cont.match(/^!penguin$/)){
		const attachment = new Discord.MessageAttachment('./src/media/echidna.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!ohmygod$/) || cont.match(/^!slayer$/) || cont.match(/^!gnome$/) || cont.match(/^!god$/)){
		const attachment = new Discord.MessageAttachment('./src/media/rsGnome.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!geckw$/)){
		const attachment = new Discord.MessageAttachment('./src/media/geckw.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!moon2l$/)){
		const attachment = new Discord.MessageAttachment('./src/media/moon2l.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!pregigi$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pregigi.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!pregario$/)){
		const attachment = new Discord.MessageAttachment('./src/media/pregario.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!moon2boo$/)){
		const attachment = new Discord.MessageAttachment('./src/media/moon2Boo.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!poggy$/)){
		const attachment = new Discord.MessageAttachment('./src/media/moon2poggy.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!illuminati$/)){
		const attachment = new Discord.MessageAttachment('./src/media/illuminati.png');
		msg.channel.send(attachment);
	}

	/*
	============
	Random Memes
	============
	*/
	
	if(cont.match(/^!wojack$/)){

		const wojacksPath = path.join(process.cwd(), 'src/media/Wojacks');
		const files = fs.readdirSync(wojacksPath);
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const attachment = new Discord.MessageAttachment(path.join(wojacksPath, chosenFile));
		msg.channel.send(attachment);
	}
	else if(cont.match(/^!pepe$/)){
		const files = fs.readdirSync(path.join(__dirname,'media/Pepes'));
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const attachment = new Discord.MessageAttachment(path.join(__dirname, 'media/Pepes/', chosenFile));
		msg.channel.send(attachment);
	}
	else if(cont.match(/^!feelinglucky$/)){
		const files = fs.readdirSync(path.join(__dirname,'media/Asciiart'));
		const chosenFile = files[Math.floor(Math.random()*files.length)];
		const data = fs.readFileSync(path.join(__dirname, 'media/Asciiart/', chosenFile));
		msg.channel.send(data.toString());
	}

	/*
	===========
	TARKOV MAPS
	===========
	*/

	if(cont.match(/^!customs$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/customs.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!factory$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/factory.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!interchange$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/interchange.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!reserve$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/reserve.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!woods$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/woods.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!shoreline$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/shoreline.png');
		msg.channel.send(attachment);
	}

	if(cont.match(/^!labs$/)){
		const attachment = new Discord.MessageAttachment('./src/media/tarkov/labs.png');
		msg.channel.send(attachment);
	}

	if(msg.content.startsWith('!owrank')) {
		const username = encodeURIComponent(msg.content.substring(7).trim());
		const url = 'https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/';
		console.log(username);
		if(username.length > 0) {
			if(username.includes('%23')) {
				axios.get(url + username, {
					headers: {
						'TRN-Api-Key': process.env.TRN_KEY
					}
				})
					.then(function(response) {
						const timePlayed = response.data.data.segments[1].stats.timePlayed.displayValue;
						const wins = response.data.data.segments[1].stats.wins.displayValue;
						const matchesPlayed = response.data.data.segments[1].stats.matchesPlayed.displayValue;
						const timeSpentOnFire = response.data.data.segments[1].stats.timeSpentOnFire.displayValue;
						const wlPercentage = response.data.data.segments[1].stats.wlPercentage.displayValue;
						const medals = response.data.data.segments[1].stats.medals.displayValue;
						const multiKills = response.data.data.segments[1].stats.multiKills.displayValue;
						const kd = response.data.data.segments[1].stats.kd.displayValue;
						msg.reply(
							`here is the Information I was able to find:

Time Played:								${timePlayed}
Wins: 										${wins}
Matches Played:								${matchesPlayed}
Time Spent On Fire:							${timeSpentOnFire}
Win/Loss Ratio:								${wlPercentage}
# of Medals:								${medals}
# of Multi-Kills:							${multiKills}
KD Ratio:									${kd}
							`);
					})
					.catch(function(e) {
						msg.reply('Whoops, there was an error! Wait a few minutes and try again.');
						console.error(e);
					});
			} else {
				msg.reply('The username must include a #');
			}		
		} else {
			msg.reply('You must include a username');
		}
	}

});
