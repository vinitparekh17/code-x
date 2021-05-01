const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async(bot, message, args) => {
if(!args.length) return message.reply(`What you want to search?`)
    const article = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`)
      .then((res) => res.json())
      .catch(() => {
        throw "I couldn't find a wikipedia article with that title!";
      });
    
    if(!article.content_urls) return message.reply(`I couldn't find a wikipedia article with that title!`);
    const embed = new Discord.MessageEmbed()
      .setThumbnail("https://i.imgur.com/fnhlGh5.png")
      .setURL(article.content_urls.desktop.page)
      .setColor(0x00A2E8)
      .setTitle(article.title)
      .setDescription(article.extract.substr(0, 2000).replace(/[\n]/g, '\n\n'));
      
      message.channel.send(embed)
  }
  
  module.exports.help = {
      name: "wikipedia",
      aliases: ["wiki"]
  }
