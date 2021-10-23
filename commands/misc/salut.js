const { MESSAGES } = require("../../utils/constants/constants");

module.exports.run = (client, messageCreate, commandName, args, prefix) => {
     messageCreate.channel.send("Salut!");
};

module.exports.help = MESSAGES.COMMANDS.MISC.SALUT;
