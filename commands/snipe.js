const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
const msg = bot.snipes.cache.get(message.channel.id);
if (!msg) return message.channel.send('No deleted message found!');

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.displayAvatarURL())
.setDescription(msg.content)
.setTimestamp()
.setColor('RANDOM')

  message.channel.send(embed);
 
}

module.exports.help = {
    name: "snipe",
    aliases: ["snipe"]
}