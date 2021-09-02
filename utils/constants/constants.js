const MESSAGES = {
     COMMANDS: {
          DICE: {
               DICE: {
                    name: "dice",
                    aliases: [
                         "d",
                         "d2",
                         "d3",
                         "d4",
                         "d5",
                         "d6",
                         "d7",
                         "d8",
                         "d9",
                         "d10",
                         "d11",
                         "d12",
                         "d15",
                         "d20",
                         "d100",
                    ],
                    category: "dice",
                    description: "roll x dice of x (d et dice = d20)",
                    usage: "<your_number_of_dice_within_the_limit_of_100>",
                    args: false,
                    hasMention: false,
                    permissions: false,
               },
               ROLL: {
                    name: "roll",
                    aliases: [
                         "roll"
                    ],
                    category: "dice",
                    description: "xdy => x = number of dice / y = type of dice",
                    usage: "<your_number_of_dice_within_the_limit_of_100>",
                    args: false,
                    hasMention: false,
                    permissions: false,
               },
          },
          MISC: {
               SALUT: {
                    name: "salut",
                    aliases: ["hello"],
                    category: "misc",
                    description: "Renvoie un salut",
                    usage: "Renvoi un salut",
                    args: false,
                    hasMention: false,
                    permissions: false,
               },

               USERINFO: {
                    name: "userinfo",
                    aliases: ["ui", "uinfo"],
                    category: "misc",
                    description:
                         "Renvoie les infos d'un utilisateur mentionné.",
                    usage: "votre_mention",
                    args: true,
                    hasMention: true,
                    permissions: false,
               },

               HELP: {
                    name: "help",
                    aliases: ["help"],
                    category: "misc",
                    description:
                         "Renvoie une liste de commande ou les informations sur une seule commande",
                    usage: "la_commande_obscure",
                    args: false,
                    hasMention: false,
                    permissions: false,
               },
               ZEN: {
                    name: "zen",
                    aliases: ["zen"],
                    category: "misc",
                    description:
                         "Renvoie une random quote",
                    usage: "",
                    args: false,
                    hasMention: false,
                    permissions: false,
               },
               FACT: {
                    name: "fact",
                    aliases: ["fact"],
                    category: "misc",
                    description:
                         "Renvoie une info random",
                    usage: "",
                    args: false,
                    hasMention: false,
                    permissions: false,
               },
          },

     },
};

exports.MESSAGES = MESSAGES;
