const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    const user = message.members.users.first() || message.author;
    const avatar = user.displayAvatarURL((format: 'png'));
    const image = await Canvas.trigger(avatar);
    message.channel.send(
        new Discord.messageAttachment(image, 'image.gif')
        )
    
}

module.exports.help = {
    name: "trigger",
    aliases: ["trigger"]
}
