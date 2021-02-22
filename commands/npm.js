const Discord = require('discord.js');
const bot = new Discord.Client();
const process = require('child_process');
const ownerID = '467004231295959040'
module.exports.run = async(bot, message, args) => {
          if(message.author.id === 'OWNER_ID') {
const msg = await message.channel.send(`Please wait, this may take a white.`);
msg.delete({timeout: 4000});
process.exec(args.join(" ") , (error, stdout) => { let result = (stdout || error);
message.channel.send(result, { code: "asciidoc", split: "\n"}).catch(err => message.channel.send(err))
}) 
} else { 
return message.reply(`Developers Only !`); 
}

}

module.exports.help = {
    name: "non",
    aliases: ["npm"]
}
