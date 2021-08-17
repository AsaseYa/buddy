const MESSAGES = {
     COMMANDS: {
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
          },

     },
};

exports.MESSAGES = MESSAGES;
