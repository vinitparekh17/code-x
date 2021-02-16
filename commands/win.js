const Discord = require('discord.js')
module.exports.run = async(bot,message,args) => {
const a = args.join(" ")
if (!a) return message.channel.send('Please give winners ');

const embed = new Discord.MessageEmbed()

.setTitle("Each winner getss 50rs each")
.addField('<a:redBadge:807268819000492073>Winners<a:ArrowRight:807268621516013598>', a)

.setColor("#00ffff")   
.setFooter(message.client.user.username, message.client.user.displayAvatarURL());
message.channel.send(a , embed), message.react('✅');

  }

module.exports.help = {
    name: "win",
    aliases: ["win"]
}
