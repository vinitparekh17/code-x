 const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
        const member = message.mentions.members.first() || message.member;
        var Attachment = (message.attachments)
        if (Attachment.array()[0]){var url = Attachment.array()[0].url}
        let avatar = member.user.displayAvatarURL({ format: "jpg" });

        const animatedGif = await petPetGif(args[0] || url || avatar);
        message.channel.send(
            new Discord.MessageAttachment(animatedGif, 'pet.gif') 
        )
    }

module.exports.help = {
    name: "pet",
    aliases: ["pet"]
}
