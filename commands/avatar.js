module.exports.run = async (bot,message,args) => {
let mentionedMember = message.mentiones.members.first() || message.guild.members.cache.get(args[0]);
if (!mentionedMember) mentionedMember = message.member;

async run(client, message, args) {
const avbd = Discord.messageEmbed()
.setTitle(mentionedMember.user.tag + "'s Avatar!")
.setImage(mentionedMember.usar.displayAvatarURL());

  message.channel.send(avbd);
 }
}
module.exports.help = {
name: "avatar",
aliases: ["av"]

}
