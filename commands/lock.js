const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
 if(!message.member.haspermissiom(MANAGE_CHANNELS)) return message.reply("You don't have enough permission to use this command!")
  
 permissionOverwrites: [
 {
   id: message.guild.id,
   deny: ['SEND_MESSAGES'],
  },
 
 
 
 ]
  message.channel.send(`${message.chennal} has been locked`)
  }

module.exports.help = {
  name: "lock",
  aliases: ["lock"]
}
