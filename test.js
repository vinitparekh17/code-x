const Discord = require('discord.js')
module.exports.run = (bot,message,args) =>{
    

    const member = message.member
    wmbd = new Discord.MessageEmbed()
 .setColor('RANDOM')   
 .setTitle(`${member.user.username} has joined the server`)
 .setDescription(`✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬

 <a:hypesquad:779012310504964126>  Welcome <@${member.user.id}> <a:hypesquad:779012310504964126> 

<a:GG_true3:751658895247802429>  Read our server rules from <#751657642660855879>

<a:GG_true3:751658895247802429>  Take your roles from <#726836834541240360>

<a:GG_true3:751658895247802429>  You're ${bot.users.cache.size} member of this Server! <a:donald_clap:750700622830895204> 

✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬`)
 .setTimestamp()
 .setImage('https://cdn.discordapp.com/attachments/652183126055059469/672054114993176586/welcome-dribbble.gif')
 message.channel.send(wmbd)

}
module.exports.help = {
    name: "test",
    aliases: []
}