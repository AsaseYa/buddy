const { MESSAGES } = require("../../utils/constants/constants");
const fetch = require("node-fetch");

module.exports.run = (client, messageCreate, args) => {
     function getQuote() {
          return fetch("https://zenquotes.io/api/random")
               .then(res => {
                    return res.json()
               })
               .then(data => {
                    return data[0]["q"] + " -" + data[0]["a"]
               })
     }
     getQuote().then(quote => messageCreate.channel.send(`\`${quote}\``));



};

module.exports.help = MESSAGES.COMMANDS.MISC.ZEN;
