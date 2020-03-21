//Caleb Garrick

//Script developed to pull github changes
//and redeploy AjetBot

const { exec } = require('child_process');

exec('cd ../', () => {
	exec('git pull', () => {
		exec('node src/index.js', () => {
			process.kill();
		});
	});
});