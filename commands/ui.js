const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) member = message.member

this.statuses = {
      online: "<:online:473263910045351957> Online",
      idle: "<:idle:473264190346493964> Idle",
      dnd: "<:dnd:473264076852559873> Do Not Disturb",
      offline: "Offline"
    }

    const embed = new Discord.MessageEmbed()
      .setColor(`member.displayHexColor || 0x9590EE`)
      .setThumbnail(member.user.displayAvatarURL({ size: 512 }))
      .addField("❯ Name", member.user.tag, true)
      .addField("❯ ID", member.id, true)
      .addField("❯ Discord Join Date", `new Date(user.createdTimestamp).toLocaleDateString()`)
      .addField("❯ Server Join Date", `new Date(user.createdTimestamp).toLocaleDateString()`)
      .addField("❯ Status", this.statuses[member.presence.status], true)
      .addField("❯ Bot", member.user.bot ? "Yes" : "No", true)
      .addField("❯ Highest Role", member.roles.cache.size > 1 ? member.roles.highest.name : "None", true)
      .addField("❯ Hoist Role", member.roles.hoist ? member.roles.hoist.name : "None", true);
      message.channel.send(embed)
    
  }
  
  module.exports.help = {
      name: "userinfo",
      aliases: ["userinfo"]
  }
