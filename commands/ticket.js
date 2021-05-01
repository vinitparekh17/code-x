const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    const server = message.guild;
         console.log("1")
        server.channels.create(`ticket-${message.author.username}` , {
          type: 'text',

          permissionOverwrites: [

            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']

            },
            {
                id: message.author.id,
                allow:  ['VIEW_CHANNEL','SEND_MESSAGES','ATTACH_FILES','READ_MESSAGE_HISTORY']

            }
            
            


            


          ]



        }).then(channel =>{
             let sembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Welcome')
            .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
            .addField(`Use the following commands`, `!close to close your ticket!\n!transcript to get transcript of your ticket.`)
            .setTimestamp()
            .setFooter(`Dont't ping unnecessary!`)
            .setImage('https://cdn.discordapp.com/attachments/778218564578574336/779008159100174336/Rainbow.gif')
            channel.send(`<@${message.member.id}> **Here is your private ticket**` , sembed)
            channel.setTopic(`ID - ${message.author.id}`)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Payment channel has been created!')
            .setColor('RANDOM')
            .setDescription(`<:Yes:831428306339102720> <#${channel.id}> created! `)
            .setTimestamp()
              message.reply(payembed)
              let logchannel = message.guild.channels.cache.find(channel => channel.name === `ticket-logs`)
			if(logchannel) {
				logchannel.send(`New Ticket has been created by **${message.author.tag}**`);
			}
        })

    }
    module.exports.help = {
        name: "t",
        aliases: ["ticket"]
    }