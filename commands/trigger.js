const Discord = require('discord.js');
const { Canvas } = require('canvacord');
module.exports.run = async(bot, message, args) => {
    const user = message.mentions.members.first() || message.author;
    let avatar = user.displayAvatarURL({format: 'png'})
    const image = await Canvas.trigger(avatar);
    message.channel.send({
    files: [{
        attachment: image,
        name: 'image.gif'
    }]
   })
    
}

module.exports.help = {
    name: "trigger",
    aliases: ["trigger"]
}
