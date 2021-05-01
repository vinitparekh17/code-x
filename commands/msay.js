module.exports.run = async(bot, message, args) => {
    const times = args[0];
    args.shift()
    const content = args.join(' ');
    
    if(!times) return message.reply({ embed: {color: "YELLOW" , description: `Correct Usage \`!msay 5 <message>\``} });
    if(times > 20) return message.reply(`I can not send it more then 20 times`)
    if(!content) return message.reply(`You did not gave any message to repeat`);
    
    for (let i=0; i<times;i++){
  message.channel.send(`${content}`);
    }
}

module.exports.help = {
    name: "msay",
    aliases: ["msay"]
}
