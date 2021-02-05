
module.exports.run = async(bot,message,args) => {
const Discord = required('discord.js')
const ms = required('ms')

        var result = message.split(" ").slice(1).join(" ")
        let evaled = eval(result);
        const.log("result")
        message.chennal.send(evaled)
}        

module.exports.help = {
        name: "eval",
        aliases: ["eval"]
}
