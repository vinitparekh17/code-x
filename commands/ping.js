const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    const cembed = new Discord.MessageEmbed()
    .setTitle(`Pong?`)
    const m = await message.channel.send(cembed)
    const embed = new Discord.MessageEmbed()
    .setTitle(`Ping...`)
    .addField("<a:green:829283875040657419> Letancy" , `\`\`\`py\n${Date.now() - message.createdTimestamp} ms\`\`\``)
    .addField("<a:green:829283875040657419> API Letancy" , `\`\`\`py\n${Math.round(bot.ws.ping)} ms\`\`\``)
    .setThumbnail(`https://c.tenor.com/CwBokC9f1xMAAAAM/king-barbarian.gif`)
    .setColor(`#D2FF00`)
    .setFooter("Dev • $VINIT$#1742" , `https://cdn.discordapp.com/avatars/467004231295959040/72241ee3123c736bf914f9d05a5a6491.webp
`)
       m.edit(embed)

}

module.exports.help = {
    name: "ping",
    aliases: []
}
