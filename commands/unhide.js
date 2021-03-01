module.exports.run = async (bot,message,args) => {
  const Discord = require('discord.js')
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permission');
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Missing **"MANAGE CHANNEL"** permission');
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['VIEW_CHANNEL'],
     },
    ],);
  const unhidembed = new Discord.MessageEmbed()
  .setColor('#00FF00')
  .setDescription(`<a:GG_true3:758699876858462258> <#${message.channel.id}> has been unhidden!`)
  message.channel.send(unhidembed)

  }

module.exports.help = {
    name: "unhide",
    aliases: ["unhide"]
  }
