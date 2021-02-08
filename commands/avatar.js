
module.exports.run = async (bot,message,args) => {
const ms = require('ms')
const Discord = require('discord.js')
let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!mentionedMember) mentionedMember = message.member;

const avbd = new Discord.MessageEmbed()
.setTitle(mentionedMember.user.tag + "'s Avatar!")
.setColor("RANDOM")
.setImage(mentionedMember.user.displayAvatarURL({ dynamic: true }));

  message.channel.send(avbd);
 
}

module.exports.help = {
    name: "avatar",
    aliases: ["av"]
}
