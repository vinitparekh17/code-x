const Discord = require('discord.js');
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async(bot, message, args) => {
    const page1 = new Discord.MessageEmbed()
    .setTitle('Page 1')
    .setDescription('This is testing')
    
    const page2 = new Discord.MessageEmbed()
    .setTitle('Page 2')
    .setDescription('Testing page 2')
    
    const page3 = new Discord.MessageEmbed()
    .setTitle('Page 3')
    .setDescription('Last page is here')
    
    const pages = [
        page1,
        page2,
        page3
        
        ];
        
        const emoji = ['⏪', '⏩']
        const timeout = '10000'
        
        paginationEmbed(message, pages, emoji, timeout);
        
}

module.exports.help = {
    name: "t2",
    aliases: []
}