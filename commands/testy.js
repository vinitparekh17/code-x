const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

    const member = message.mentions.members.first() || message.author;

    if (!member) return message.reply("Please specify a member!");

    const members = message.guild.members.cache
      .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp)
      .array();

    const position = new Promise((ful) => {
      for (let i = 1; i < members.length + 1; i++) {
        if (members[i - 1].id === member.id) ful(i);
      }
    });
  
    const positione = new Discord.MessageEmbed()
    .setTitle(`Join Position Of ${member.tag}`)
    .setDescription(`${member.user.username} is the \`${await position}\` member to join **${message.guild.name}**`)
    .setColor(`#ee7373`)
    .setThumbnail(message.author.avatarURL({ dynamic: true}))
    message.channel.send(
      positione
    );
  }

module.exports.help = {
    name: "test",
    aliases: ["a"]
}
