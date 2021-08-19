const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({ intents: [ Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES ] });

bot.once("ready", () => {
    console.log(bot.user.username + " is ready!");
});

bot.on("messageCreate", message => {
    if (message.author.bot || message.webhookId || !message.content.startsWith(config.prefix)) return;

    const raw_args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const command = raw_args.shift().toLowerCase();
    const args = raw_args.slice(0);

    switch (command) {
        case "ping":
            message.channel.send("Pong! :ping_pong:");
            break;
        case "say":
            if (!args.length) return message.reply("You need to provide a message!");

            message.channel.send(args.join(" "));
            break;
        case "kill":
            var user = message.mentions.members.first();
            if (!user) return message.reply("Please mention a user or bot!");

            message.channel.send(user.toString() + " died!");
            break;
    }
});

bot.login(config.token);