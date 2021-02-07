module.exports.run = async (bot,message,args) => {
  const ms = require('ms')
  const Discord = require('discord.js')
  if(!message.member.haspermission("MANAGE_CHANNELS")) return message.channel.send('You do not have enough permission');
  if(!message.guild.me.haspermission("MANAGE_CHANNELS")) return message.channel.send('Missing **"MANAGE CHANNEL"** permission');
  
  const role = message.guild.cache.
  
