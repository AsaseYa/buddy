const { MESSAGES } = require("../../utils/constants/constants");

module.exports.run = (client, messageCreate, args) => {
     messageCreate.channel.send("Salut!");
};

module.exports.help = MESSAGES.COMMANDS.MISC.SALUT;
