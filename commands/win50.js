const Discord = require('discord.js')
const ms = require ('ms')
module.exports.run = async (bot,message,args)=>{
  if(!message.member.hasPermission("ADMINISTRATION")) return message.channel.send('Teri aukat nhi h ye command use karne ki');
  if(args[0] == null) message.channel.send("Spacify someone as a winner");
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

else if (command === 'win50') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

await message.channel.send(` **Aqua Champion Solo SD #{args[5]} **

Rank 1 : args[0] | 50₹
Rank 2 : args[1] | 50₹
Rank 3 : args[2] | 50₹
Rank 4 : args[3] | 50₹
Rank 5 : args[4] | 50₹

________________________`)

}

module.exports.help = {
    name:"win50",
    aliases:["win50"]
}
    
