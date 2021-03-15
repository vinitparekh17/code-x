const { chatBot } = require('reconlx') 

module.exports.run = async(bot, message, args) => {
        chatBot(message, args.join(" "))
}

module.exports.help = {
    name: "chatting",
    aliases: ["<@778284711428096000>"]
}
