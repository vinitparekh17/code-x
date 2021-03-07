const Discord = require('discord.js');
const { Canvas } = require('canvacord');
module.exports.run = async(bot, message, args) => {
    const user = message.mentions.members.first() || message.author;
    const avatar = user.displayAvatarURL({format: 'png'});
    const image = await Canvas.trigger(avatar);
    message.channel.send(
        new Discord.messageAttachment(image, 'image.gif')
        )
    
}

module.exports.help = {
    name: "trigger",
    aliases: ["trigger"]
}
