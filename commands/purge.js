module.exports.run = async (bot,message,args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Koi zaroorat nahi hai beta!')
    if(!args[0]) return message.channel.send("Specify how many messages u wanna delete u....")
    delength = args[0]
    if(!delength || delength == 0){
        message.channel.send("I can't delete 0 messages,u mofo");
    if(!delength || delength < 2 || delength > 100){
        message.channel.send("Please specify a number between 2 and 100");
    if(!Number.isInteger(delength)) return message.channel.send("This is not a valid number!");
    if(isNaN(delength)) return message.channel.send("Plz, provide valid number")
    return
     }

await message.channel.bulkDelete(delength)
.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
.catch(console.error);
message.channel.send(`Deleted ``${messages.size}`` messages!!`).then(message => message.delete({timeout: 2000}))
}

module.exports.help = {
    name: "purge",
    aliases: ["Purge" , "urade"]
}
