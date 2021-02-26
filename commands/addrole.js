const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async(bot, message, args) => {
if(!message.member.hasPermission("ADMINISTRATION")) return message.reply(`You don't have enough perms to run this command`)
const member = message.mentions.users.first()
if(!member) {
message.reply('Plesse mention someone to give role')
return
}

args.shift()

const roleName = args.join(' ')
const { guild } = message

const role = guild.roles.cache.find((role) => {
  return role.name === roleName
})
if(!role) {
    message.reply(`There is no role called **${roleName}** !`)
    return
}
const user = guild.members.cache.get(member.id)
member.roles.add(role)

const roled = new Discord.MessageEmbed()

.setTitle(`**${role.name}** added to **${member.user.tag}** `)
.setColor("#00FFFFF")
message.channel.send(roled)

}

module.exports.help = {
    name: "addrole",
    aliases: ["addrole"]
}
