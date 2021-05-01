module.exports.run = async(bot, message, args) => {
        if (!message.channel.parentID === message.guild.channels.cache.find(m => m.name === "MODMAIL")) return   
        let User = message.guild.members.cache.get(`${message.channel.topic}`)
        User.user.send({
            embed: {
                author: {
                    text: message.author.tag,
                    icon_url: message.author.displayAvatarURL({
                        dynamic: true
                    })
                },
                color: `#FF0000`,
                title: 'Thread Closed',
                description: args.join(" ") ? args.join(" ") : "No reason provided",
                footer: {
                    text: `${message.guild.name} | ${message.guild.id}`,
                    icon_url: message.guild.iconURL({
                        dynamic: true
                    })
                },
                timestamp: new Date()
            }
        })

        message.channel.send({
            embed: {
                description: 'Closing channel...',
                color: `#FFFF00`,
            }
        })
        setTimeout(() => {
            message.channel.delete()
        }, 2500)

    }
    
    module.exports.help = {
        name: "finish",
        aliases: []
    }