const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
 if (!message.author.id == '467004231295959040') return message.reply('This command is only for the developer.');
 if (!args[0]) return message.reply('You must specify code to eval.');
 let result = args.join(' ');
 if (args.join(' ') == 'process.exit()') { 
 return message.reply('Access Denied.');
 } try {
 evaled = await eval(`(async () => {${result}})()`);
 if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

 message.channel.send((evaled), {code:"js"});
 } catch (err) {
 message.channel.send(`\`ERROR\` \`\`\`js\n${(err)}\n\`\`\``);
 }
 }
 
 module.exports.help = {
     name: "eval",
     aliases: ["eval"]
 }
