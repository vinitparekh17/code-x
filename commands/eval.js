const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
 if (!message.author.id == '467004231295959040') return message.reply('This command is only for the developer.');
if(message.author.id !== '467004231295959040') return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send((evaled), {code:"js"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
    }
  }
 
 module.exports.help = {
     name: "eval",
     aliases: ["eval"]
 }
