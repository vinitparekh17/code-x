
module.exports.run = async (bot,message,args) => {
const ms = require('ms')
const Discord = require('discord.js')
let mentionedMember = message.mentiones.members.first() || message.guild.member.cache.get(args[0]);
if (!mentionedMember) mentionedMember = message.member;

const avbd = Discord.messageEmbed()
.setTitle(mentionedMember.user.tag + "'s Avatar!")
.setImage(mentionedMember.usar.displayAvatarURL());

  message.channel.send(avbd);
 
}

module.exports.help = {
name: "avatar",
aliases: ["av"]

}
