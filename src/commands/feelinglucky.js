const path = require('path');
const fs = require('fs');

const regex = /^!feelinglucky$/i;

const func = (msg) => {
	const files = fs.readdirSync('./media/Asciiart');
	const chosenFile = files[Math.floor(Math.random()*files.length)];
	const data = fs.readFileSync('media/Asciiart/' + chosenFile);
	msg.channel.send(data.toString());
};

module.exports = {
	regex,
	func
};