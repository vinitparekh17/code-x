const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async(bot, message, args) => {
if(!args[0]) return message.reply(`What you want to search?`)
    const article = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(args.join(" "))}`)
      .then((res) => res.json())
      .catch(() => {
        throw "I couldn't find a wikipedia article with that title!";
      });
    
    if(!article.content_urls) throw "I couldn't find a wikipedia article with that title!";
    const embed = new Discord.MessageEmbed()
      .setThumbnail("https://i.imgur.com/fnhlGh5.png")
      .setURL(article.content_urls.desktop.page)
      .setTitle(article.title)
      .setDescription(article.extract);
      
      message.channel.send(embed)
  }
  
  module.exports.help = {
      name: "wikipedia",
      aliases: ["wiki"]
  }
