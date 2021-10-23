require("dotenv").config();
const { Client, Collection, Intents } = require("discord.js");
const { loadCommands, loadEvents } = require("./utils/handler/loader"); //Import les commands et events handler

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES);


const client = new Client({ intents: myIntents }); //crée le bot


// Music Bot
// const { Player } = require("discord-music-player");
// const player = new Player(client, {
//     leaveOnEmpty: false, // This options are optional.
// });




["commands"].forEach((x) => (client[x] = new Collection())); //crée une collection des commandes

//lancement du command handler
loadCommands(client);

//lancement de l'event handler
loadEvents(client);

client.on('ready', function () {
     console.log("Je suis connecté !")
});
   

client.login(process.env.BOT_TOKEN);

//For any unhandled errors
process.on("unhandledRejection", (err) => {
     console.error(err);
});