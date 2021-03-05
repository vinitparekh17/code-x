const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

message.channel.createInvite({ maxUses: 1, maxAge: 43200})
  .then(invite => message.channel.send(`Genarating Invite link!`);
message.edit(`${invite.url}`))
  .catch(console.error);

} 

module.exports.help = {
    name: "Invite",
    aliases: ["invite"]
}
