const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`You don't have enough permission to use this command!`)
let filter = m => m.author.id === message.author.id

message.reply(`Are you sure? \nReply with \`Yes\` or \`No\``)
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time'], 
        }).then(async message => {
            message = message.first()

            if(message.content.toLowerCase() === 'yes') {
message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id);
    ch.setPosition(message.channel.position);
    message.channel.delete();

ch.send(`/`${message.author.tag}/` nuked this channel!`, {
    files: [{
        attachment: 'https://cdn.discordapp.com/attachments/830741522571329536/830741527503306770/dribbblepost_03.gif',
        name: 'file.gif'
    }]
   })
})
            } else if(message.content.toLowerCase() === 'no') {
                message.channel.send(`${message.author} has cancelled the command!`)
            } else {
                message.channel.send('Invalid response.')
            }
        }).catch(collected => {
            message.channel.send('Cancelling Command!')

        })
}

module.exports.help = {
    name: "nuke",
    aliases: ["nuke"]
}
