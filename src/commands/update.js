const deploy = require('../deploy');

const regex = /^!update$/i;

const func = (msg) => {
	msg.reply('Updating...');
	deploy();
};

module.exports = {
	regex,
	func
};