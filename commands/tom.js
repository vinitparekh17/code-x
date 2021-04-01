const { MessageAttachment } = require('discord.js')
module.exports.run = async(bot, message, args) => {
    user = message.mentions.first() || message.author

    const img = await this.bot.img.tom(user.displayAvatarURL({ size: 256, format: "png" }));

     message.channel.send(new MessageAttachment(img, "tom.png"));
  }

module.exports.help = {
    name: "Tom",
    aliases: ["Tom"]
}
