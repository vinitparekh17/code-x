const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    const cembed = new Discord.MessageEmbed()
    .setTitle(`Pong?`)
    const m = await message.channel.send(cembed)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Ping...`)
    .setDescription(`>>> 🏓 Pong!\nLatency is \`${Math.floor(message.createdTimestamp} ms\``)
    .setColor(`RANDOM`)
    .setTimestamp()
       m.edit(embed)

}

module.exports.help = {
    name: "ping",
    aliases: []
}
