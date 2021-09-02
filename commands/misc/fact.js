const { MESSAGES } = require("../../utils/constants/constants");
const fetch = require("node-fetch");

module.exports.run = (client, messageCreate) => {
     function getQuote() {
          return fetch("https://uselessfacts.jsph.pl/random.json?language=en")
               .then(res => {
                    return res.json()
               })
               .then(data => {
                    return data.text
               })
     }
     getQuote().then(quote => messageCreate.channel.send(`${quote}`));
};

module.exports.help = MESSAGES.COMMANDS.MISC.FACT;
