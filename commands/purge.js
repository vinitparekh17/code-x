const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
       await message.delete() //delets the command 

        if(!message.guild.me.permissions.has("MANAGE_MESSAGES", "ADMINISTRATOR")){
            return message.channel.send('Sorry, i'm missing permissions').then(m => m.delete({timeout: 10000})
        } //check if the bot has permissions

        if(!message.member.permissions.has("MANAGE_GUILD","ADMINISTRATOR", "MANAGE_MESSAGES")){
            return message.channel.send('You can't execute this command | mission perm').then(m => m.delete({timeout: 10000})
        }

        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2]) //Checks if the args actually a number

        const user = message.guild.member(message.mentions.users.last() || await message.guild.members.fetch(args[1]));

        if (!amount){
            message.channel.send(`Please specify a number between 1 to 100`).then(m =>m.delete({timeout: 10000}))
        }

        if(isNaN(amount)) return message.channel.send({embed: new Discord.MessageEmbed()
        .setDescription('Please provide number between 1 - 100 to purge')}).then(m =>{
            m.delete({timeout: 5000})
        })

        if(amount >= 101) return message.channel.send({embed: new Discord.MessageEmbed()
            .setDescription('❌ | I Can\'t delete more than 100 message at once 😢')
            .setColor('#FF0000')
            }).then(m =>{
                m.delete({timeout: 5000})
        })
            
        message.channel.messages.fetch({
            limit: 100,
        }).then(async messages => {
        if (user) {
            const filterBy = user ? user.id : client.user.id; //if user doesn't exist, it will delete messages send by bot
            messages = messages.filter(m => m.author.id === filterBy && !m.pinned).array().slice(0, amount); //if message is pinned, it will ignore the message
        }
        await message.channel.bulkDelete(messages)
        
            message.guild.channels.cache.get('806045165922943016').send({embed: new Discord.MessageEmbed()
                .setAuthor('Command - PURGE')
                .addField('Moderator', `${message.author.tag}`, true)
                .addField('Message Amount', `${amount}`, true)
                .addField('User', `\`\`\`${user.user.tag}`, true)
                .addField('Channel', `${message.channel}`, true)
                .setFooter(`${user.id}`)
                .setTimestamp()
                .setColor(message.guild.me.displayColor)
            })
        }).catch(error => console.log(error));
   })
   module.exports.help = {
       name: "purge",
       aliases: ["purge"]
   }
