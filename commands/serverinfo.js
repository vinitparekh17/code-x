const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async(bot, message, args) => {
let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle("**Informações Do Servidor**")
    .setColor('ff0000')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField(`🎫 Nome Do Servidor:`, message.guild.name, true)
    .addField(`🆔 ID Do Servidor`, message.guild.id, true)
    .addField(`👑 Dono Do Servidor`, message.guild.owner, true)  
    .addField(`🗺️Região Do Servidor`, message.guild.region, true)
    .addField(`👥Membros Totais:`, message.guild.members.cache.size, true)
    .addField(`🤖 Bots:`, message.guild.members.cache.filter(member => member.user.bot).size, true)
    .addField(`🚶 Pessoas:`, message.guild.members.cache.filter(member => !member.user.bot).size, true)
    .addField(`😗 Emojis:`, message.guild.emojis.cache.size, true)
    .addField(`👻 Emojis Animados:`,message.guild.emojis.cache.filter(emoji => emoji.animated).size,true )
    .addField(`💬 Canais De Texto:`, message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
    .addField(`🎤 Canais De Voz:`, message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
    .addField(`👔 Número De Cargos:`, message.guild.roles.cache.size, true)
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
		message.channel.send(embed);
  }

module.exports.help = {
    name: "server-info",
    aliases: ["serverinfo", "si"]
}
