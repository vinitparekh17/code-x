module.exports.run = async(bot,message,args) => {
    if(message.channel.name.startsWith('ticket') || message.channel.name.startsWith('closed')){
message.channel.send('Deleting channel in 5 seconds...')
       setTimeout(function() {
message.channel.delete() }, 5000)
    }
    else{ message.reply("This is not ticket channel Noob!")}

}

module.exports.help = {
    name: "delete ticket",
    aliases: ["delete"]
}
