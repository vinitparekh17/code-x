module.exports.run = async (bot,message,args) => {
    const m = await message.channel.send("Ping?")
       m.edit(`🏓 Pong!
        Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
        API Latency is ${Math.round(bot.ping)}ms`)

}

module.exports.help = {
    name: "ping",
    aliases: ["ping"]
}
