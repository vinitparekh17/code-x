const Discord = require('discord.js');
const moment = require('moment');
module.exports.run = async(bot, message, args) => {
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

this.statuses = {
      online: "<:online:828186993007525899> Online",
      idle: "<:idle:828187183331672094>  Idle",
      dnd: "<:dnd:828187347043745842>  Do Not Disturb",
      offline: "Offline"
    }

    const embed = new Discord.MessageEmbed()
            .setDescription(`<@${member.user.id}>`)
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
            .setColor('#2F3136')
            .setFooter(`ID: ${message.author.id}`)
            .setThumbnail(member.user.displayAvatarURL())
            .setColor("RANDOM")
            .addField("__Avatar Link:__", `[click here](${member.user.displayAvatarURL({dynamic: true})})`, true)
            .addField("__Status__", this.statuses[member.presence.status], true)
            .addField("__Joined at:__",`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
            .addField("__Created On__", member.user.createdAt.toLocaleString(), true)
            .addField(`\n__Roles [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]__`,`${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true);
      message.channel.send(embed)
    
  }
  
  module.exports.help = {
      name: "userinfo",
      aliases: ["userinfo"]
  }
