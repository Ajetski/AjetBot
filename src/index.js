const path = require('path');
const fs = require('fs');

const modules_parent_dir = path.join(__dirname, 'commands');
const modules_folders = fs.readdirSync(modules_parent_dir);

let my_modules = [];

modules_folders.forEach(folderName => {
	const modules_dir = path.join(__dirname, 'commands', folderName);
	const module_names = fs.readdirSync(modules_dir);
	module_names.forEach(fileName => {
		my_modules.push(require(`./commands/${folderName}/${fileName}`));
	});
});

module.exports = my_modules;