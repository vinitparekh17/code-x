module.exports.run = async (bot,message,args)=>{
    const Discord = require('discord.js')
if(!member.hasPermission("ADMINISTRATION")) return message.channel.send("You can not use this command");

let a = args[0];
let b = args[1];
let c = args[2];
let d = args[3];
let e = args[4];
let f = args[5];

message.chennal.send(` **AQUA CHAMPION SOLO SD ${f}**

Rank 1 : ${a}
Rank 2 : ${b}
Rank 3 : ${c}
Rank 4 : ${d}
Rank 5 : ${e} `)

}

module.exports.help = {
    name: "winnerlist",
    aliases: ["win50"]
}
