
module.exports.run = async(bot, message, args) => {
 if (!message.author.id == '467004231295959040') return message.reply('This command is only for the developer.');
 if (!args[0]) return message.reply('You must specify code to eval.');
 var result = args.join(' ');
 if (args.join(' ') == 'process.exit()') {
 return message.reply('Access Denied.');
 }
 try {
 evaled = await eval(`(async () => {${result}})()`);
 if (!evaled.includes(bot.token)) {
 message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
 } else {
 message.reply('The bot token is not available to the public.');
 }
 } catch (error) {
 message.channel.send(`\`\`\`\n${error}\`\`\``);
 }
 }
 
 module.exports.help {
     name: "eval",
     aliases: ["eval"]
 }
