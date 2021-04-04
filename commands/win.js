const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
const player = args.join(" ")
if (!player) return message.channel.send('Please give winners ');

const embed = new Discord.MessageEmbed()

.setTitle("Each winner getss 50rs each")
.addField(`<a:Minigame_Crown:795920833645903872> Winners <a:Minigame_Crown:795920833645903872>\n ${player.trim()},`) 

.setColor("#00ffff")   
.setFooter(bot.user.username, bot.user.displayAvatarURL());
message.channel.send(embed), message.react('✅');

  }

module.exports.help = {
    name: "win",
    aliases: ["win"]
}
