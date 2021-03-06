module.exports.run = async (bot,message,args) => {
  const ms = require('ms')
  const Discord = require('discord.js')
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permission');
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Missing **"MANAGE CHANNEL"** permission');
  
  const role = message.guild.roles.cache.get('794899914437951488');
  let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  if(!lockChannel) lockChannel = message.channel;
  
  await lockChannel.updateOverwrite(role, {
    SEND_MESSAGES: true
  }) .catch(err => console.log(err));
  const unlockembed = new Discord.MessageEmbed()
  .setColor('#00FF00')
  .setDescription(`<a:success:837582423528308776> <#${message.channel.id}> has been unlocked!`)
  message.channel.send(unlockembed)

  }

module.exports.help = {
    name: "unlock",
    aliases: ["unlock"]
  }
