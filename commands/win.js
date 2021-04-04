const Discord = require('discord.js')
module.exports.run = async(bot, message) => {
const args[0] = a
const args[1] = b
if (args[0] === null) return message.channel.send('Please give winners ');

const embed = new Discord.MessageEmbed()

.setTitle("Each winner getss 50rs each")
.addField(`<a:Minigame_Crown:795920833645903872> Winners <a:Minigame_Crown:795920833645903872>\nNo. 1 : ${a} \nNo. 2 : ${b}`) 

.setColor("#00ffff")   
.setFooter(bot.user.username, bot.user.displayAvatarURL());
message.channel.send(embed), message.react('✅');

  }

module.exports.help = {
    name: "win",
    aliases: ["win"]
}
