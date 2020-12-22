const path = require('path');
const fs = require('fs');

const regex = /^!listnames .*$/i;

const func = (msg) => {
    const fileName = path.join(__dirname, '../../../media/names.txt')
    const people = JSON.parse(fs.readFileSync(fileName).toString());
    let splitString = msg.content.split(' ');
    let userID = splitString[1].substr(3, splitString[1].length - 4);
    let guild = msg.client.guilds.cache.get(process.env.SERVER_ID);
    if (guild.member(userID)) {
        if (people.hasOwnProperty(userID)) {
            msg.channel.send("The list of names for " + splitString[1] + " is: " + people[userID].names);
        }
        else {
            msg.channel.send("User does not have a list of nicknames.");
        }
        fs.writeFileSync(fileName, JSON.stringify(people));
    }
    else {
        msg.reply("The username you entered does not exist in this server.");
    }
}

module.exports = {
    regex,
    func
};