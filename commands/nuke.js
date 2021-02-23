const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`You don't have enough permission to use this command!`)

message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id);
    ch.setPosition(message.channsl.position);
    message.channel.delete();

ch.send('This channel has been nuked! https://c.tenor.com/SzfO_CqZSRwAAAAM/chicken-chicken-bro.gif ')
   })
}

module.exports.help = {
    name: "nuke",
    aliases: ["nuke"]
}
