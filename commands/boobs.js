const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async(bot, message, args) => {
const { url } = await fetch("https://nekos.life/api/v2/img/boobs")
      .then((res) => res.json());

    const embed = new Discord.MessageEmbed()
      .setTitle(`Here is some random image`)
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered by nekos.life`, message.author.displayAvatarURL({ size: 32 }));

    message.channel.send(embed)
}

module.exports.help = {
    name: "boob",
    aliases: ["boobs"]
}
