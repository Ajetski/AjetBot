const path = require('path');
const fs = require('fs');

const regex = /^!removename .*$/i;

const func = (msg) => {
    const fileName = path.join(__dirname, '../../../media/names.txt')
    const people = JSON.parse(fs.readFileSync(fileName).toString());
    let splitString = msg.content.split(' ');
    let userID = splitString[1].substr(3, splitString[1].length - 4);
    let removeName = msg.content.substr(17 + userID.length);
    if (people.hasOwnProperty(userID)) {
        people[userID].names = people[userID].names.filter(name => name !== removeName);
    }
    else {
        msg.reply("User does not have a list of nicknames.");
    }
    fs.writeFileSync(fileName, JSON.stringify(people));
}

module.exports = {
    regex,
    func
};