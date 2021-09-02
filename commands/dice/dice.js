const { MESSAGES } = require("../../utils/constants/constants");
const { diceFunction } = require("../../utils/functions/diceFunction");

module.exports.run = (client, messageCreate, commandName, args, prefix) => {
     let diceCommandName = messageCreate.content
          .slice(prefix.length)
          .split(/ +/)
          .shift()
          .toLowerCase();
     let typeOfDice = "";
     if (diceCommandName === "dice" || diceCommandName === "d") {
          typeOfDice = 20;
     } else {
          typeOfDice = diceCommandName.substring(1);
     }
     const randomDice = () => Math.floor(Math.random() * typeOfDice) + 1;
     diceFunction(client, messageCreate, args, randomDice);
};

module.exports.help = MESSAGES.COMMANDS.DICE.DICE;
