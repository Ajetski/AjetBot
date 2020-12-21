const path = require('path');
const fs = require('fs');

const regex = /^!on .*$/i;

const func = (msg) => {
    const fileName = path.join(__dirname, '../../../media/names.txt')
    const people = JSON.parse(fs.readFileSync(fileName).toString());
    let splitString = msg.content.split(' ');
    let userID = splitString[1].substr(3, splitString[1].length - 4);
    if (people.hasOwnProperty(userID)) {
        people[userID].enabled = true;
    }
    fs.writeFileSync(fileName, JSON.stringify(people));
}

module.exports = {
    regex,
    func
};