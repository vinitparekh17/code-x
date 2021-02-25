const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
const targetUser = message.mentions.users.first();
if(!targeteduser) {
message.reply('Plesse mention someone to give role')
return
}

args.shift()

const roleName = args.join(' ')
const { guild } = message

const role = guild.roles.cache.find((role) => {
    role.name == roleName
})
if(!role) {
    message.reply('There is no role called "${roleName}" !')
    return
}
const member = guild.member.cache.get(targetUser.id)
console.log(member)
}

module.exports.help = {
    name: "addrole",
    aliases: ["addrole"]
}
