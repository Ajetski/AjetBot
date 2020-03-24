//Caleb Garrick

//Script developed to pull github changes
//and redeploy AjetBot

const { exec } = require('child_process');

const redeploy = () => {
	exec('cd .. && git pull && node src/index.js', () => {process.kill();});
};

module.exports = redeploy;