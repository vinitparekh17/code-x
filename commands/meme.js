const Discord = require('discord.js');
const fetch = require('node-fetch');
module.exports.run = async (bot,message,args) =>{
  fetch('https://meme-api.herokuapp.com/gimme')
.then(res => res.json())
.then(async json => {
const memembed = new Discord.MessageEmbed()
.setTitle(json.title)
.setColor('RANDOM')
.setImage(json.url)
.setFooter(`${json.subreddit} , ${json.postLink}`);

let msg = await message.channel.send(memembed);

 });
}

module.exports.help = {
    name: "meme",
    aliases: ["meme"]
}
