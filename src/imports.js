const path = require('path');
const fs = require('fs');

const modules_dir = path.join(__dirname, 'test');
const modules_arr = fs.readdirSync(modules_dir);

let my_modules = [];

modules_arr.forEach(elem => {
	my_modules.push(require(`./test/${elem}`));
});

my_modules.forEach(elem => {
	console.log(elem);
});