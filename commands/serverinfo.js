const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async(bot, message, args) => {
let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setTitle("**Server Information**")
    .setColor('ff0000')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField(`🎫 Server Name:`, message.guild.name, true)
    .addField(`🆔 Server ID:`, message.guild.id, true)
    .addField(`📎 Server Icon:`)
    .setDescription(`[click here](message.guild.iconURL({format: 'png'}))`)
    .addField(`👑 Server Owner:`, message.guild.owner, true)  
    .addField(`🗺️ Server Religion`, message.guild.region, true)
    .addField(`👥 Members Count:`, message.guild.members.cache.size, true)
    .addField(`🤖 Bot Count:`, message.guild.members.cache.filter(member => member.user.bot).size, true)
    .addField(`🚶 Humans:`, message.guild.members.cache.filter(member => !member.user.bot).size, true)
    .addField(`😗 Emojis:`, message.guild.emojis.cache.size, true)
    .addField(`👻 Animated Emojis:`,message.guild.emojis.cache.filter(emoji => emoji.animated).size,true )
    .addField(`💬 Text Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
    .addField(`🎤 Voice Channel:`, message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
    .addField(`👔 Roles Count:`, message.guild.roles.cache.size, true)
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png'}))
		message.channel.send(embed);
  }

module.exports.help = {
    name: "server-info",
    aliases: ["serverinfo", "si"]
}
