module.exports.run = async (bot,message,args) => {
let mentionedMember = message.mentiones.member.first() || message.guild.members.cache.get(args[0]);
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
