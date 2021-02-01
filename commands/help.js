const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    message.react('✅');
   if(message.channel.id !== "805773678636826644")
   return {
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
                allow:  ['VIEW_CHANNEL' , 'SEND_MESSAGES' , 'ATTACH_FILES']

            }
            
            


            


          ]



        }).then(channel =>{
          channel.send(`<@${message.member.id}>, only PayTM details allowed here!`)
            let sembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Send Your PayTM details!')
            .setDescription(`<a:hypesquad:779012310504964126> PayTM associated name:
<a:hypesquad:779012310504964126> PayTM associated number:
<a:hypesquad:779012310504964126> List of payments due:
<a:hypesquad:779012310504964126> Screenshot(s) from game.tv app:
            `)
            .setTimestamp()
            .setFooter(`Dont't ping unnecessarily`)
            .setThumbnail('https://cdn.discordapp.com/emojis/784788309938798652.png')
            .setImage('https://cdn.discordapp.com/attachments/778218564578574336/779008159100174336/Rainbow.gif')
            channel.send(sembed)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Payment/Support thread created!')
            .setColor('#00FFE6')
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
        aliases: ["pd"]
    }
