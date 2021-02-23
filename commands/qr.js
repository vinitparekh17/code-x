const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

    let weblink = (args[0])
    let link = `http://api.qrserver.com/v1/create-qr-code/?data=${weblink}&size=200x200`

          // Input Checking
          if (!weblink) return message.channel.send('Please give me a link to turn into a QR-Code')
            const attachment = new MessageAttachment(link, 'qrcode.png');
            const embed = new Discord.MessageEmbed() {
              .setTitle(`QR-Code has been Generated!`)
              .attachFiles(attachment)
              .setColor('BLUE')
              .setImage('attachment://qrcode.png')
            message.channel.send(embed);
           } else { message.channel.send('Error! The input is not a valid link! Please make sure it is a valid link.\nWhen inputting the link please add `https://`!'); }
       
  }

module.exports.help = {
    name: "QR Genarator",
    aliases: ["create-qr"]
}
