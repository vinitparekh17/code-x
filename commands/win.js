const Discord = require('discord.js')
module.exports.run = async(bot,message,args) => {
const a = args.join(" ")
if (!a) return message.channel.send('Please give winners ');

const embed = new Discord.MessageEmbed()

.setTitle("Each winner getss 50rs each")
.addField('<a:Minigame_Crown:795920833645903872> Winners <a:Minigame_Crown:795920833645903872>', a)

.setColor("#00ffff")   
.setFooter(message.client.user.username, message.client.user.displayAvatarURL());
message.channel.send(a , embed), message.react('✅');

  }

module.exports.help = {
    name: "win",
    aliases: ["win"]
}
