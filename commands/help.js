const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    message.react('✅');
   if(message.channel.name.startsWith('𒁷〢prize-claim')){
    const server = message.guild;
         console.log("1")
        server.channels.create(`pay-${message.author.username}` , {
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
          channel.send(`<@${message.member.id}> **Only Paytm details allowed here!**`)
            let sembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Send Your PayTM details!')
            .setDescription(`Paytm associated name:
Paytm number:
Payment due:
Screenshot(s) from <#780049423270412298>:
            `)
            .setTimestamp()
            .setFooter(`Dont't ping unnecessary!`)
            .setThumbnail('https://cdn.discordapp.com/emojis/788686359945674764.png')
            .setImage('https://cdn.discordapp.com/attachments/778218564578574336/779008159100174336/Rainbow.gif')
            channel.send(sembed)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Payment/Support thread created!')
            .setColor('RANDOM')
            .setDescription(`Your ticket channel <#${channel.id}> has been created! <a:yes:767757416174714920>`)
            .setTimestamp()
           
            
              message.channel.send(payembed)
        })

      }else{
        message.channel.send("You can only use this command in a payments channnel!")
      }

    }
    module.exports.help = {
        name: "paytmdetails",
        aliases: ["Help" , "ticket" ,"pay" , "payme" , "paisa" , "pd"]
    }
