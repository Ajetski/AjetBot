const path = require('path');
const fs = require('fs');

const regex = /^!removename .*$/i;

const func = (msg) => {
    const fileName = path.join(__dirname, '../../../media/names.txt')
    const people = JSON.parse(fs.readFileSync(fileName).toString());
    let splitString = msg.content.split(' ');
    let userID = splitString[1].replace(/\D/g, '');
    let removeName = msg.content.substr(13 + splitString[1].length);
    if (msg.member.roles.cache.has(process.env.MOD_ROLE)) {
        let guild = msg.client.guilds.cache.get(process.env.SERVER_ID);
        if (guild.member(userID)) {
            if (people.hasOwnProperty(userID)) {
                people[userID].names = people[userID].names.filter(name => name !== removeName);
                msg.channel.send("Name \"" + removeName + "\" removed. The list of names for " + splitString[1] + " is now: " + JSON.stringify(people[userID].names));
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
    else {
        msg.reply("You do not have the moderator role. Do not try again.")
    }
}

module.exports = {
    regex,
    func
};