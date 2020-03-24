const regex = /^!caleb$|^!kleb$|^!daddy$/i;

const func = (msg) => {
	msg.channel.send('sup <@215636797189914625>');
};

module.exports = {
	regex,
	func
};