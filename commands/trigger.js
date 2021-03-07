const Discord = require('discord.js');
const { Canvas } = require('canvacord');
module.exports.run = async(bot, message, args) => {
    const user = message.mentions.members.first() || message.author;
    const image = await Canvas.wanted(user.displayAvatarURL {format: 'png'});
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
