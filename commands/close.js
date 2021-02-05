module.exports.run = async(bot,message,args) => {
    if(message.channel.name.startsWith('pay') || message.channel.name.startsWith('Closed')){

        message.channel.delete();
    }
    else{message.channel.send("This is not ticket channel Noob!")}

}

module.exports.help = {
    name: "close",
    aliases: ["bandh","Close"]
}
