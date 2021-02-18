 const Discord = require('discord.js');
 const ms = require('ms');
module.exports.run = async(client, message, args) => {
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send({ embed: { color: "RED", description: `⚠  ${message.author} You are missing the following permission: \`MANAGE SERVER\`` } });

        const Channel = await message.mentions.channels.first();

        if (!Channel) return message.channel.send({ embed: { color: "ORANGE", description: `**Required Arguments** \n \`\`\`create-embed <#channel> <embed.color>\`\`\`` } });

        const emebdcolor = args[1];
        if (!emebdcolor) return message.channel.send({ embed: { color: "ORANGE", description: `**Required Arguments** \n \`\`\`create-embed <#channel> <embed.color>\`\`\`` } });

        const embed = new Discord.MessageEmbed()
        embed.setColor(`${emebdcolor}`)

        if (Channel) {
            message.channel.send(`${message.author} - Please type below the message. (time: 100s)`)
                .then(function () {
                    message.channel.awaitMessages(m => m.author.id == message.author.id, {
                        max: 1,
                        time: 1000 * 100,
                        errors: ['time'],
                    })
                        .then((collected) => {
                            embed.setDescription(`${collected.first()}`)
                            Channel.send(embed).catch(err => message.channel.send(`⚠ **Error:** ${err}`))
                        })
                })
                .catch(function () {
                    message.channel.send(`⚠ ${message.author} - You didnt write down the message on time`);
                });
        }
    }

module.exports.help = {
    name: "embed",
    aliases: ["embed"]
}
