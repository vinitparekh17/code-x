const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

    let days = Math.floor(bot.uptime / 86400000);
    let hours = Math.floor(bot.uptime / 3600000) % 24;
    let minutes = Math.floor(bot.uptime / 60000) % 60;
    let seconds = Math.floor(bot.uptime / 1000) % 60;

    let uptimeE = new Discord.MessageEmbed()
    .setTitle("UPTIME")
    .setColor("RANDOM")
    .setDescription(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    .setFooter(`Requested by: ${message.author.username}`)
    message.channel.send(uptimeE)
    return;
  }

module.exports.help = {
    name: "uptime",
    aliases: ["uptime"]
}
