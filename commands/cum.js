const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async(bot, message, args) => {
const { url } = await fetch("https://nekos.life/api/v2/img/cum")
      .then((res) => res.json());

    const embed = new Discord.MessageEmbed()
      .setTitle(`Random cum images has been generated!`)
      .setDescription(`[click here to get link](${url})`)
      .setColor(`#FF00FF`)
      .setImage(url)
      .setFooter(`Requested by: ${message.author.tag} | Powered by nekos.life`, message.author.displayAvatarURL({ size: 32 }));

    message.channel.send(embed)
}

module.exports.help = {
    name: "cum",
    aliases: ["cum"]
}
