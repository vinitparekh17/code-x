const Discord = require('discord.js');
const recon = require('reconlx');
const ReactionPages = recon.ReactionPages;

module.exports.run = async(bot, message, args) => {
    const embed1 = new Discord.MessageEmbed()
    .setTitle(`The Guardian Bot Help & Support`)
    .setColor(`#00FFDB`)
    .setFooter(`Pages 1/2`)
    
    const embed2 = new Discord.MessageEmbed()
    .setTitle(`The Guardian Bot Help & Support`)
    .setColor(`#00FFDB`)
    .setFooter(`Pages 2/2`)
    
    const pages = [embed1. embed2];
    const emojis = ['➡️' , '⬅️'];
    ReactionPages = (message, pages, reaction, true, emojis, 10*1000 )
}

module.exports.help = {
    name: "testbd"
    aliases: ["testy"]
}
