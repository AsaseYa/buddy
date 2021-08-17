const { MessageEmbed } = require("discord.js");

module.exports = (client, messageCreate) => {
     console.log("je suis passé par là");
     if (messageCreate.author.bot) return;
     return messageCreate.channel.send("Il n'y a pas d'interaction en privé. Si tu as des suggestions ou des idées, fais-nous un retour sur le discord.");
     
};
