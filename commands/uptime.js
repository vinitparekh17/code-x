module.exports.run = async(bot, message, args) => {

    let days = Math.floor(bot.uptime / 86400000);
    let hours = Math.floor(bot.uptime / 3600000) % 24;
    let minutes = Math.floor(bot.uptime / 60000) % 60;
    let seconds = Math.floor(bot.uptime / 1000) % 60;

    let uptimeE = new Discord.MessageEmbed()
    .setTitle("UPTIME")
    .setColor("RANDOM")
    .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)
    .setFooter(`Requested by: ${message.author.username}`)
    message.channel.send(uptimeE)
    return;
  }

module.exports.help = {
    name: "uptime",
    aliases: ["uptime"]
}
