const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    message.react('<a:ac_loading:806430327924457492>');
   if(message.channel.name.startsWith('𒀚〢prize-claim')){
    const server = message.guild;
         console.log("1")
        server.channels.create(`gpgc-${message.author.username}` , {
          type: 'text', parent: '764343582177624124',

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
          channel.send(`<@${message.member.id}> **Only Paytm details allowed here!**`)
             let sembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Your GPGC will be sent in your Dms!')
            .setDescription('**Note: Minimum 75₹ is required to create GPGC!**
If you want to stack your prize than inform any mods.
Screenshot(s) from <#780049423270412298>:')
            .setFooter(`Dont't ping unnecessary!`)
            .setThumbnail('https://cdn.discordapp.com/attachments/797089409219821569/808655213203685416/images.jpeg')
            .setImage('https://cdn.discordapp.com/attachments/778218564578574336/779008159100174336/Rainbow.gif')
            channel.send(sembed)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Your GPGC ticket has been created!')
            .setColor('RANDOM')
            .setDescription(`Your ticket <#${channel.id}> has been created! <a:3307_verif_red:758239955742097409> `)
            .setTimestamp()

            
              message.author.send(payembed)
        })

      }else{
        message.channel.send("You can only use this command in a payments channnel!")
      }

    }
module.exports.help = {
    name: "gpgc-ticket",
    aliases: ["gpgc"]
    }
