module.exports.run = async (bot,message,args)=>{
    const Discord = require('discord.js')
    if(!message.member.hasPermission("KICK_MEMBERS")){

        message.channel.send("Kick to hoga tu <:SaaleNoob:717419994820116530>")
        return
let member = message.mentions.members.first();

}

module.exports.help = {
    name: "kick",
    aliases: ["Kick"]
}
