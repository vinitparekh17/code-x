module.exports.run = async (bot,message,args) => {
    const m = await message.channel.send("Ping?")
const pingbd = new Discord.MessageEmbed()
.setTitle('Ping?')
.setColor('#FFF500')
.setDescription(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`)
    message.channel.edit('pingbd')
}

module.exports.help = {
    name:"ping",
    aliases:[]
}
