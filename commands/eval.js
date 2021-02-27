const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
 if (!message.author.id == '467004231295959040') return message.reply('This command is only for the developer.');
 if (!args[0]) return message.reply('You must specify code to eval.');
 let result = args.join(' ');
 if (args.join(' ') == 'process.exit()') { 
 return message.reply('Access Denied.');
 } try {
 let evaled = eval(result);
 if (!result.includes(bot.token)) {
 message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
 } else {
 message.reply('The bot token is not available to the public.');
 }
 } catch (err) {
 message.reply(`\`\`\`\n${err}\`\`\``);
 }
 }
 
 module.exports.help = {
     name: "eval",
     aliases: ["eval"]
 }
