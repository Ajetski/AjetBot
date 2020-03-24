const axios = require('axios');

const regex = /^!owrank.*$/i;

const func = (msg) => {
	const username = encodeURIComponent(msg.content.substring(7).trim());
	const url = 'https://public-api.tracker.gg/v2/overwatch/standard/profile/battlenet/';
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

Time Played:\t\t\t\t\t|\t\t${timePlayed}
Wins: \t\t\t\t\t\t\t\t|\t\t${wins}
Matches Played: \t\t\t|\t\t${matchesPlayed}
Time Spent On Fire:	\t|\t\t${timeSpentOnFire}
Win/Loss Ratio: \t\t\t|\t\t${wlPercentage}
# of Medals: \t\t\t\t\t|\t\t${medals}
# of Multi-Kills:\t\t\t\t|\t\t${multiKills}
KD Ratio:  \t\t\t\t\t\t|\t\t${kd}`);
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
};

module.exports = {
	regex,
	func
};