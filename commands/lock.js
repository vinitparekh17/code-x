module.exports.run = async (bot,message,args) => {
  const ms = require('ms')
  const Discord = require('discord.js')
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permission');
  if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Missing **"MANAGE CHANNEL"** permission');
  
  const role = message.guild.roles.cache.get('794899914437951488');
  let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
  if(!lockChannel) lockChannel = message.channel;
  
  await lockChannel.updateOverwrite(role, {
    SEND_MESSAGES: false
  }) .catch(err => console.log(err));
  message.send => {
  let lockembed = new Discord.MessgeEmbed()
  .setColor('#00FF00')
  .setDiscription(`<a:ac_loading:806430327924457492> <#${message.channel.id}> has been locked!`)
  message.channel.send(lockembed)

  }

module.exports.help = {
    name: "lock",
    aliases: ["lock"]
  }
