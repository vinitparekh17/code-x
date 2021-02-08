const Discord = require('discord.js')
const ms = require ('ms)
module.exports.run = async (bot,message,args)=>{
  if(!message.member.hasPermission("ADMINISTRATION")) return message.channel.send('Teri aukat nhi h ye command use karne ki');

await message.channel.send(' **Aqua Champion Solo SD #{args[5]}

Rank 1 : args[0] | 50₹
Rank 2 : args[1] | 50₹
Rank 3 : args[2] | 50₹
Rank 4 : args[3] | 50₹
Rank 5 : args[4] | 50₹

________________________')
    
