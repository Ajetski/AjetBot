module.exports = {
	regex: /^!lichess .*$/i,

    func: (msg) => {
        console.log(process.env.LICHESS_API_KEY)
        words = msg.content.split(" ");
		if (words.length === 3) {
            if (words[0] === "!lichess" && words[1] === "user") {
                const request = require("request");
                const options = {
                    method: "POST",
                    url: "https://lichess.org/api/users",
                    headers: {
                        Authorization: "Bearer " + process.env.LICHESS_API_KEY,
                        "Content-Type": "text/plain",
                    },
                    body: words[2],
                };
                request(options, (err, res) => {
                    if (err){
                        console.log("Err:", err);
                        return msg.channel.send("Error: API is not working. Try again in a couple of minutes.");
                    }
                    try{
                        console.log(res);
                        const user = JSON.parse(res.body)[0];
                        console.log(user);
                        // console.log(typeof(user.perfs));
                        // console.log(user.perfs);
                        // console.log(user.perfs.rapid);
                        var output = `User: ${user.username}\n`;
                        output += `Online: ${user.online}\n`
                        output += user.perfs.ultraBullet ? `Ultra Bullet: ${user.perfs.ultraBullet.rating}${user.perfs.ultraBullet.prov ? '?' : ''}\n` : '';
                        output += user.perfs.bullet ? `Bullet: ${user.perfs.bullet.rating}${user.perfs.bullet.prov ? '?' : ''}\n` : '';
                        output += user.perfs.blitz ? `Blitz: ${user.perfs.blitz.rating}${user.perfs.blitz.prov ? '?' : ''}\n` : '';
                        output += user.perfs.rapid ? `Rapid: ${user.perfs.rapid.rating}${user.perfs.rapid.prov ? '?' : ''}\n` : '';
                        output += user.perfs.classical ? `Classical: ${user.perfs.classical.rating}${user.perfs.classical.prov ? '?' : ''}\n` : '';
                        output += user.perfs.correspondence ? `Correspondence: ${user.perfs.correspondence.rating}${user.perfs.correspondence.prov ? '?' : ''}\n` : '';
                        msg.channel.send(output);
                    } catch(err2){
                        console.log(err2);
                        return msg.channel.send("Error: Invalid syntax error. Usage: !lichess user <username>");
                    }
                });
            }
        }
	},
};
