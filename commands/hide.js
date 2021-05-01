module.exports.run = async (bot,message,args) => {
  const Discord = require('discord.js')
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permission');
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Missing **"MANAGE CHANNEL"** permission');
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['VIEW_CHANNEL'],
     },
    ],);
  const hidembed = new Discord.MessageEmbed()
  .setColor('#00FF00')
  .setDescription(`<a:success:837582423528308776> <#${message.channel.id}> has been hidden!`)
  message.channel.send(hidembed)

  }

module.exports.help = {
    name: "hide",
    aliases: ["hide"]
  }
