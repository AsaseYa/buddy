const { MESSAGES } = require("../../utils/constants/constants");

module.exports.run = (client, messageCreate, commandName, args, prefix) => {
     const firstMentionned = messageCreate.mentions.users.first();
     messageCreate.channel.send(
          `Voici le tag de la personne mentionnée: ${firstMentionned.tag}`
     );
};

module.exports.help = MESSAGES.COMMANDS.MISC.USERINFO;
