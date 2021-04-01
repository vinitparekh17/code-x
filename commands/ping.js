module.exports.run = async (client, message, args) => {
    const m = await message.channel.send("Ping?")
       m.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Latency is ${Math.round(client.ping)}ms`)

}

module.exports.help = {
    name: "ping",
    aliases: []
}
