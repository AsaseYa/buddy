const { MESSAGES } = require("../../utils/constants/constants");
const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const categoryList = readdirSync("./commands");

module.exports.run = (client, messageCreate, commandName, args, prefix) => {
     if (!args.length) {
          const embed = new MessageEmbed()
               .setColor("#36393F")
               .addField(
                    "Liste des commandes",
                    `Une liste de toutes les sous-catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help command_name>\`.`
               );
          for (const category of categoryList) {
               embed.addField(
                    `${category}`,
                    `${client.commands
                         .filter(
                              (cat) =>
                                   cat.help.category === category.toLowerCase()
                         )
                         .map((cmd) => cmd.help.name)
                         .join(", ")}`
               );

          }
          return messageCreate.channel.send({ embeds: [embed] });
     } else {
          const command =
               client.commands.get(args[0]) ||
               client.commands.find(
                    (cmd) =>
                         cmd.help.aliases && cmd.help.aliases.includes(args[0])
               );
          if (!command)
               return messageCreate.reply(`La commande ${args[0]} n'existe pas.`);

          const embed = new MessageEmbed()
               .setColor("#36393F")
               .setTitle(`\`${command.help.name}\``)
               .addField("Description", `${command.help.description}`)
               .addField(
                    "Utilisation",
                    command.help.usage
                         ? `${prefix}${command.help.name} ${command.help.usage}`
                         : `${prefix}${command.help.name}`,
                    true
               );
          if (command.help.aliases.length > 1)
               embed.addField(
                    "Alias",
                    `${command.help.aliases.join(", ")}`,
                    true
               );
          return messageCreate.channel.send({ embeds: [embed] });
     }
};

module.exports.help = MESSAGES.COMMANDS.MISC.HELP;
