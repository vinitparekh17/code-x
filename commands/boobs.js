const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async(bot, message, args) => {
const { url } = await fetch("https://nekos.life/api/v2/img/boobs")
      .then((res) => res.json());

    const embed = this.client.embed()
      .setTitle(msg.tr("COMMAND_BOOBS"))
      .setImage(url)
      .setFooter(`Requested by: ${msg.author.tag} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }));

    return msg.send({ embed })
}

module.exports.help = {
    name: "boob",
    aliases: ["boobs"]
}
