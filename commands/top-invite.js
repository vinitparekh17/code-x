const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    const invites = await message.guild.fetchInvites();
    const topTen = invites.filter((inv) => inv.uses > 0).sort((a, b) => b.uses - a.uses).first(10);

    if(topTen.length === 0) return msg.send("There are no invites, or none of them have been used!");

    const embed = new Discord.MessageEmbed()
      .setTitle(`Top Invites in ${message.guild.name}`)
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setDescription(topTen.map((inv) => `• **${inv.inviter.username}** has **${inv.uses.toLocaleString()}** Invites.`).join("\n\n"))
       message.channel.send(embed)
}

module.exports.help = {
    name: "topinvite",
    aliases: ["ti"]
}
