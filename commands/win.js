module.exports.run = async (bot,message,args) => {
const Discord = require('discord.js')
const ms = require('ms')

  async run (message, args, level, reply) { 

const a = args.join(" ")
if (!a) return message.channel.send('Please give winners ');

const embed = new Discord.MessageEmbed()

.setTitle("Each winner getss 50rs each")
.addField('<a:redBadge:807268819000492073>Winners<a:ArrowRight:807268621516013598>', a)

.setColor("#00ffff")   
.setFooter(message.client.user.username, message.client.user.displayAvatarURL());
message.channel.send(embed), message.react('✅');

  }}

module.exports.help = {
    name = "win",
    aliases = ["win"]
}
