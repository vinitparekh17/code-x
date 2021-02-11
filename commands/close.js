module.exports.run = async(bot,message,args) => {
    if(message.channel.name.startsWith('paytm') || message.channel.name.startsWith('Closed') || message.channel.name.startsWith('gpgc')){
message.channel.send('Deleting channel in 5 seconds...')
       setTimeout(function() {
message.channel.delete() }, 5000)
    }
    else{message.channel.send("This is not ticket channel Noob!")}

}

module.exports.help = {
    name: "close",
    aliases: ["bandh","Close"]
}
