const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async(bot, message, args) => {
    if(!message.channel.nsfw) return message.reply(`This command is only works in NSFW channels`)
const { url } = await fetch("https://nekos.life/api/v2/img/boobs")
      .then((res) => res.json());

    const embed = new Discord.MessageEmbed()
      .setTitle(`Random boobs images has been generated!`)
      .setDescription(`[click here to get link](${url})`)
      .setColor(`#FF00FF`)
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered by nekos.life`, message.author.displayAvatarURL({ size: 32 }));

    message.channel.send(embed)
}

module.exports.help = {
    name: "boob",
    aliases: ["boobs"]
}
