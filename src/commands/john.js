const regex = /^!john$/i;

const func = (msg) => {
	msg.channel.send('sup <@340249267769835520>');
};

module.exports = {
	regex,
	func
};