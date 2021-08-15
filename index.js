const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({ intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES ] });

bot.once("ready", () => {
    console.log(bot.user.username + " is ready!");
});

bot.on("messageCreate", message => {
    console.log(message.content);
});

bot.login(config.token);