const regex = /^!ping$/i;

const func = (msg) => {
	msg.reply('pong');
};

module.exports = {
	regex,
	func
};