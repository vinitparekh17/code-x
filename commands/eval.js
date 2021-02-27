const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
 if (!message.author.id == '467004231295959040') return message.reply('This command is only for the developer.');
 if (!args[0]) return message.reply('You must specify code to eval.');
 }
 try {
 let result = args.join(' ');
 if (args.join(' ') == 'process.exit()') return message.reply('Access Denied.');
 let evaled = eval(result);
 if (!evaled.includes(bot.token)) {
 message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
 } else {
 message.reply('The bot token is not available to the public.');
 }
 } catch (err) {
 message.channel.send(`\`\`\`\n${err}\`\`\``);
 }
 
 module.exports.help = {
     name: "eval",
     aliases: ["eval"]
 }
