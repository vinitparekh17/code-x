const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
if (!message.author.id !== '467004231295959040') return;

const code = args.join(" ");
if(!code) return message.reply("leasee provide code to execute");

try{
const result = await eval(code);
let output = result;
if (typeof result !== "string") {
  output = inspect(result);
  }
  
  message.channel.send('output, { code: "js" }); } catch (error) {
  console.log(error);
  message.channel.send("Evaluated code is too long to display!");
  }
  }
  
  module.exports.help = {
      name: "eval",
      aliases: ["eval"]
      }
