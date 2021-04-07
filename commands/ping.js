const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    const cembed = new Discord.MessageEmbed()
    .setTitle(`Pong?`)
    const m = await message.channel.send(cembed)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Ping...`)
    .addField(":green: Letancy" , m.createdTimestamp() - message.createdTimestamp())
    .addField(":green: API Letancy" , ${Math.round(bot.ws.ping)})
    .setThumbnail(`https://c.tenor.com/CwBokC9f1xMAAAAM/king-barbarian.gif`)
    .setColor(`#D2FF00`)
    .setTimestamp()
       m.edit(embed)

}

module.exports.help = {
    name: "ping",
    aliases: []
}
