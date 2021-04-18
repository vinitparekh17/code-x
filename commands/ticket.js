const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    message.react('<a:ac_loading:806430327924457492>')
   if(message.channel.name.startsWith('𒀚〢prize-claim')){
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
            .setTitle('${message.guild.name) HELP & SUPPORT')
            .setDescription(`Use the following commands!\n\n!close to close your ticket!\n!transcript to get transcript of your ticket.`)
            .setTimestamp()
            .setFooter(`Dont't ping unnecessary!`)
            .setThumbnail('${message.guild.iconURL()')
            .setImage('https://cdn.discordapp.com/attachments/778218564578574336/779008159100174336/Rainbow.gif')
            channel.send(`<@${message.member.id}> **Here is your private ticket**` , sembed)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Payment channel has been created!')
            .setColor('RANDOM')
            .setDescription(`Your ticket <#${channel.id}> has been created! <a:3307_verif_red:758239955742097409> `)
            .setTimestamp()

            
              message.channel.send(payembed)
        })

      }else{
        message.channel.send("You can only use this command in a payments channnel!")
      }

    }
    module.exports.help = {
        name: "paytmdetails",
        aliases: ["paytm"]
    }
