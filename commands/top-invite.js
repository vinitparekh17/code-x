const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    const invites = await msg.guild.fetchInvites();
    const topTen = invites.filter((inv) => inv.uses > 0).sort((a, b) => b.uses - a.uses).first(10);

    if(topTen.length === 0) return msg.send("There are no invites, or none of them have been used!");

    const embed = new Discord.MessageEmbed()
      .setTitle(`Top Invites in ${msg.guild.name}`)
      .setAuthor(msg.guild.name, msg.guild.iconURL())
      .setDescription(topTen.map((inv) => `• **${inv.inviter.username}**'s invite **${inv.code}** has **${inv.uses.toLocaleString()}** uses.`).join("\n")));
       message.channel.send(embed)
}

module.exports.help = {
    name: "topinvite",
    aliases: ["ti"]
}
