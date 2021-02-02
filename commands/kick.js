module.exports.run = async (bot,message,args)=>{
    const Discord = require('discord.js')
    if(!message.member.hasPermission("KICK_MEMBERS")){

        message.channel.send("Kick to hoga tu <:SaaleNoob:717419994820116530>")
        return


    }
       dott = `${message.mentions.members.first()}`
      mlength = dott.length
       message.content = message.content.slice(6 + mlength);

    if(message.content.length == 0){

        message.content = "No specified reason"
    }
     if(!message.mentions.members.first()){
        message.channel.send("Uss darinde ko mention ksr jo kick hone wala hai!!")


        return
    }


             await message.mentions.members.first().kick().then((abc) => {
            var klog = new Discord.MessageEmbed()
            .setColor('FF003C')
            .setTitle(`Whoa,U Just Kicked Out This Dude!`)
            .addField(`message.mentions.members.first().user.username ,true was kicked by message.author.username,true`)
            .addField('Reason:', message.content)
            .setTimestamp()
            message.channel.send(klog)
            bot.channels.cache.get('778559682712961031').send(klog)




       }).catch(err=>{message.channel.send("Done!") 
       bot.users.cache.get('806045165922943016').send(`Couldnt kick.. ${err}`)
       return
       })
       message.channel.send(` **${message.mentions.members.first().user.username}** has been kicked!` )


}

module.exports.help = {
    name: "kick",
    aliases: ["Kick"]
}
