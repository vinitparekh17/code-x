const Discord = require (`discord.js`)

module.exports.run = (bot,message,args) => {

    let sem = new Discord.MessageEmbed()
    .setColor(`FFFF00`)
    .setTimestamp()
    .setThumbnail(`${bot.user.avatarURL()}`)
    .setImage(`https://cdn.discordapp.com/attachments/778218564578574336/779008159100174336/Rainbow.gif`)

    switch(args[0]){

    

        case '1':
            sem.setThumbnail(`https://cdn.discordapp.com/emojis/809351911047430194.png`)
            sem.setTitle(`Ticket System`)
            sem.addField(`<a:shinydot:836148202960322611>  !ticket` , `Creates a ticket channel`)
            sem.addField(`<a:shinydot:836148202960322611>  !close` , `Closes your tickets`)
            sem.addField(`<a:shinydot:836148202960322611>  !transcript`, `Generate transcript of your ticket channel`)
            sem.addField(`<a:shinydot:836148202960322611>  !close` , `Delete ticket channel`)
            break;
        case '2':
            sem.setThumbnail(`https://cdn.discordapp.com/emojis/802756953797165086.gif`)
            sem.setTitle(`Moderation Commands`)
            sem.addField(`<a:shinydot:836148202960322611>  !avatar` , `display avatar`)
            sem.addField(`<a:shinydot:836148202960322611>  !kick` , `Kicks mentioned user with given reason` )
            sem.addField(`<a:shinydot:836148202960322611>  !ban @mention reason` , `bans mentioned user with given reason`)
            sem.addField(`<a:shinydot:836148202960322611>  !mute @mention reason duration` , `mutes mentioned user for given reason for specified duration of time`)
            sem.addField(`<a:shinydot:836148202960322611>  !unmute @mention reason` , `unmutes muted user`)
            sem.addField(`<a:shinydot:836148202960322611>  !purge` , `purges specified number of messages` )
            sem.addField(`<a:shinydot:836148202960322611>  !addrole` , `add role to mentioned user` )
            sem.addField(`<a:shinydot:836148202960322611>  !hide` , `make a channel private`)

            sem.addField(`<a:shinydot:836148202960322611>  !unhide`, `make a channel for public`)

            sem.addField(`<a:shinydot:836148202960322611>  !lock` , `lock channel`)
           sem.addField(`<a:shinydot:836148202960322611>  !unlock` , `unlock channel`)
           sem.addField(`<a:shinydot:836148202960322611>  !slowmode`, `set / remove a slow mode `)
            break;
        case '3':
            sem.setThumbnail(`https://cdn.discordapp.com/emojis/755846823905853550.gif`)
            sem.setTitle(`Miscellanious Commands`)
            sem.addField(`<a:shinydot:836148202960322611>  !send` , `Dm message to mentioned user`)
            sem.addField(`<a:shinydot:836148202960322611>  !say` , `say message by bot`)  
            sem.addField(`<a:shinydot:836148202960322611>  !members` , `gives number of server members`)
           break;
           case `4`:
               sem.setThumbnail(`https://cdn.discordapp.com/emojis/763668314550697995.gif`)
               sem.setTitle(`Adult Commands`)
               sem.addField(`<a:shinydot:836148202960322611>  !anal`, `Generate random NSFW images`)
               sem.addField(`<a:shinydot:836148202960322611>  !bj`, `Generate random NSFW Images`)
               sem.addField(` <a:shinydot:836148202960322611> !boobs`, `Generate random NSFW Images`)
               sem.addField(`<a:shinydot:836148202960322611>  !cum`, `Generate random NSFW Images`)
               sem.addField(`<a:shinydot:836148202960322611>  !neko`, `Generate random NSFW Images`)
               sem.addField(` <a:shinydot:836148202960322611>  !pussy`, `Generate random NSFW Images`)
               break;
               case '5':
                   sem.setThumbnail(`https://cdn.discordapp.com/emojis/798503345433477160.gif`)
                   sem.setTitle(`Giveaway Commands`)
                   sem.addField(` <a:shinydot:836148202960322611> gstart`, `start a giveaway`)
                   sem.addField(`<a:shinydot:836148202960322611> greroll`, `reroll giveaway's winner`)
                   sem.addField(`<a:shinydot:836148202960322611> gend`, `end a giveaways before end time`)
                   break;

        default:
            
            sem.setTitle(`Select a command category!`)
        sem.addField(`<:Ticket:836138765977387048> Ticket System: (1)` , `Ticket commands`)
        sem.addField(`<a:moderator:836138850291286057>  Moderation: (2)`, `Commands exclusive to mos`)
        sem.addField(`<a:rainbowblob:836139825450582076> Miscellaneous: (3)`, `Misc commands`)
        sem.addField(`<a:sax:836142661902794793> NSFW: (4)`, `Adult Commands`)
        sem.addField(`<a:BlobGiveaway:836154598448037888> Giveaway: (5)`, 'Giveaways commands')
        sem.setDescription(`Use ur command like this: !help 2`)
    }
    message.channel.send(sem)
}
module.exports.help = {
    name: `help`,
    aliases:[`command`]
}
