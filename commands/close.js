module.exports.run = async(bot,message,args) => {
    if(message.channel.name.startsWith('pay') || message.channel.name.startsWith('closed')){

        message.channel.delete();
    }
    else{message.chennal.reply("Bhag bsdk, This is not ticket channel! ")
        .then(() => console.log(`Sent reply to ${message.author.username}`))
         .catch(console.error);
         
}
    
module.exports.help = {
    name: "close",
    aliases: ["bandh","Close"]
}
