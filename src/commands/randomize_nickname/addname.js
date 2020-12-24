const path = require('path');
const fs = require('fs');

const regex = /^!addname .*$/i;

const func = (msg) => {
    const fileName = path.join(__dirname, '../../../media/names.txt')
    const people = JSON.parse(fs.readFileSync(fileName).toString());
    let splitString = msg.content.split(' ');
    let userID = splitString[1].replace(/\D/g, '')
    let newName = msg.content.substr(10 + splitString[1].length);
    if (msg.member.roles.cache.has(process.env.MOD_ROLE)) {
        let guild = msg.client.guilds.cache.get(process.env.SERVER_ID);
        if (guild.member(userID)) {
            if (people.hasOwnProperty(userID)) {
                people[userID].names.push(newName);
            }
            else {
                people[userID] = {
                    names: [newName],
                    enabled: true
                };
            }
            fs.writeFileSync(fileName, JSON.stringify(people));
            msg.channel.send("Name \"" + newName + "\" added. The list of names for " + splitString[1] + " is now: " + JSON.stringify(people[userID].names));
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