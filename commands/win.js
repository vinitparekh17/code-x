const Discord = require('discord.js')
module.exports.run = async(bot,message,args) => {
const a = args.join(" ").split(",")
if (args[0] === null) return message.channel.send('Please give winners ');

const embed = new Discord.MessageEmbed()

.setTitle("Each winner getss 50rs each")
.addField('<a:Minigame_Crown:795920833645903872> Winners <a:Minigame_Crown:795920833645903872>\nNo. 1 : args[0]\nNo. 2 : args[1]') 

.setColor("#00ffff")   
.setFooter(message.bot.user.username, message.bot.user.displayAvatarURL());
message.channel.send(a , embed), message.react('✅');

  }

module.exports.help = {
    name: "win",
    aliases: ["win"]
}
