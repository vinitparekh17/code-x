const { MessageEmbed } = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {
    const page1 = new MessageEmbed()
            .setTitle(`Select a command category!`)
            .setColor('#FFFF00')
            .addField(`<:Ticket:836138765977387048> Ticket System: (1)` , `Ticket commands`)
            .addField(`<a:moderator:836138850291286057>  Moderation: (2)`, `Commands exclusive to mos`)
            .addField(`<a:rainbowblob:836139825450582076> Miscellaneous: (3)`, `Misc commands`)
            .addField(`<a:sax:836142661902794793> NSFW: (4)`, `Adult Commands`)
            .addField(`<a:BlobGiveaway:836154598448037888> Giveaway: (5)`, 'Giveaways commands')
            .setFooter('Pages 1/2')
            
            const page2 = new MessageEmbed()
            .setThumbnail(`https://cdn.discordapp.com/emojis/809351911047430194.png`)
            .setTitle(`Ticket System`)
            .setColor('#FFFF00')
            .addField(`<a:shinydot:836148202960322611>  !ticket` , `Creates a ticket channel`)
            .addField(`<a:shinydot:836148202960322611>  !close` , `Closes your tickets`)
            .addField(`<a:shinydot:836148202960322611>  !transcript`, `Generate transcript of your ticket channel`)
            .addField(`<a:shinydot:836148202960322611>  !close` , `Delete ticket channel`)
            .setFooter('Pages 2/2')
            
            const pages = [
                page1,
                page2
                ];
                
                const emoji = ["◀️","▶️"]
                
                const timeout = '100000'
                
                pagination(message, pages, emoji, timeout)
}

module.exports.help = {
    name: "menu",
    aliases: []
}