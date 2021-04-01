module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Ping?")
       m.edit(`>>>🏓 Pong!\nLatency is \`${Math.floor(message.createdTimestamp - message.createdTimestamp)}ms\`\nAPI Latency is \`${Math.round(bot.ping)}ms\``)

}

module.exports.help = {
    name: "ping",
    aliases: []
}
