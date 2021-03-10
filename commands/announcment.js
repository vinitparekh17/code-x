const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
        try{
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have permission to use this command');
        
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))
        return message.channel.send(
          "I need \`ADMINISTRATOR\` permission to run this command!\nGive me \`ADMINISTRATOR\` permission to stop these errors from poopin"
        )

        let mention;

        if(!args.length) return message.channel.send(`Usage:s!announce <#channel> <message> <(-all/-here)> \n \`-all\` - pings everyone. \n \`-ping here\` -here`);

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Please specify a channel!');

        if(!args[1]) return message.reply('Please specify a message to announce');

        const embed = new Discord.MessageEmbed()
                .setTitle('Important Announcement')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setColor('#2BFED5')

        // mentions
        if(args.some((val) => val.toLowerCase() === '-all')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[i].toLowerCase() === '-all') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send(`@everyone New Announcement` , embed).catch(() => {} )

        if(args.some((val) => val.toLowerCase() === '-here')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[i].toLowerCase() === '-here') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send(`@here New Announcement` , embed)

    } catch (err) {
        return message.channel.send(`Oh No Oh NO oH NO NO NO NO NO.....`).then((msg) => {
            setTimeout(() => {
                msg.edit(`${emotes.error}An Unexpected Error Occured: **${err}** \nRun \`${config.prefix}links\` to join the support server for support`);
            }, 3000)
    })
    }
}

module.exports.help = {
    name: "announce",
    aliases: ["announce"]
}
