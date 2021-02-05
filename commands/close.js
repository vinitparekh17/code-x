module.exports.run = async(bot,message,args) => {
    if(message.channel.name.startsWith('pay') || message.channel.name.startsWith('closed')){

        message.channel.delete();
    }
    else{message.channel.send("Bhag bsdk, This is not ticket channel! ")}

}

module.exports.help = {
    name: "close",
    aliases: ["bandh","Close"]
}
