const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
if(!message.member.hasPermission("ADMINISTRATION")) return message.reply(`You don't have enough perms to run this command`)
const targetUser = message.mentions.users.first();
if(!targetUser) {
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
const member = guild.members.cache.get(targetUser.id)
member.roles.add(role)

message.channel.send(`**${role.name}** added to **${targetUser.username.discriminator}** `)
}

module.exports.help = {
    name: "addrole",
    aliases: ["addrole"]
}
