const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

message.channel.createInvite({ maxUses: 1, maxAge: 43200})
  .then(invite => message.author.send(`${invite.url}`))
  .catch(console.error);

message.reply(`Invite link has been sent to your DMs`)

} 

module.exports.help = {
    name: "Invite",
    aliases: ["invite"]
}
