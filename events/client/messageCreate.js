const { Collection } = require("discord.js"); //import le bot et les collections
const {
     noMention,
     noArgs,
     noPermissions,
} = require("../../utils/functions/failFunction");

module.exports = async (client, messageCreate) => {
     //si le msg est en DM
     if (messageCreate.channel.type === "dm")
          return client.emit("directMessage", messageCreate);
     
     const prefix= "!";

     //si l'author est le bot
     if (messageCreate.author.bot) return;

     // si ça ne commence pas par le préfix ou envoyé par le bot
     if (!messageCreate.content.startsWith(prefix)) return;

     //Remove prefix et divise str en array pour séparer arguments
     const args = messageCreate.content.slice(prefix.length).split(/ +/);

     //Separe en array les éléments et les lower case
     const commandName = args.shift().toLowerCase();

     //crée user pour vérification
     const user = messageCreate.mentions.users.first();

     //stock la commande ou aliases dans command
     const command =
          client.commands.get(commandName) ||
          client.commands.find(
               (cmd) =>
                    cmd.help.aliases && cmd.help.aliases.includes(commandName)
          );

     //si la commande n'existe pas ou s'il n'y a pas d'argument
     if (!command) return `La commande ${command} n'existe pas.`;


     //Si permissions: true
     if (
          command.help.permissions &&
          !messageCreate.member.hasPermission("BAN_MEMBERS")
     ) {
          return noPermissions(messageCreate, command, prefix);
     }

     //Si hasMention: true
     if (command.help.hasMention && !user) {
          return noMention(messageCreate, command, prefix);
     }

     //Si args: True
     if (command.help.args && !args.length) {
          return noArgs(messageCreate, command, prefix);
     }

     command.run(client, messageCreate, args, prefix); //run la commande
};
