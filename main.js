const express = require('express');
const app = express()

app.get("/", (req, res) => {
  res.send("Updated Version")
})

app.listen(3000, () => {
  console.log("project is ready")
})
const token = \\"YOUR TOKEN HERE";
const Discord  = require('discord.js');
const bot = new Discord.Client();
const prefix = "!"
const ms = require('ms')
const fs = require('fs')
const mongoose = require("mongoose");
const Data = require("./models/data.js");

fs.readdir("./commands/" , (err,files) => {
    if(err) console.log(err)

    let jsfiles = files.filter(f => f.split(".").pop() === "js")
    if(jsfiles.length <= 0){
        return console.log("No Commands Found")
    }
    jsfiles.forEach((f) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} loaded!`)
        bot.commands.set(props.help.name , props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);

        })
    })
})
const config = require("./config.json");
bot.config = config;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

mongoose.connect(config.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )


const { GiveawaysManager } = require('discord-giveaways');
bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#00FFAB",
        reaction: "🎉"
    }
});
// We now have a bot.giveawaysManager property to manage our giveaways!

bot.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

bot.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

bot.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

bot.on("ready", async () => {
bot.user.setStatus('dnd')
 .then(console.log)
    .catch(console.error);
    console.log("I am READY!")

    setInterval(function() {
        let activities = [`with !help` , `your DMS!`]
        let activity = activities[Math.floor(Math.random()*activities.length)]
        
        let types = [`PLAYING` , `LISTENING`]
        let modes = types[Math.floor(Math.random()*types.length)]

       bot.user.setActivity(activity, { type: modes})
    }, 6000)


})


const SlashCommandManager = require('./SlashCommandManager');

bot.SlashCommandManager = new SlashCommandManager(bot);

bot.once('ready', async () => {
    const commandExists = await bot.SlashCommandManager.globalCommandExists('ping');
    if (!commandExists) bot.SlashCommandManager.createGlobalCommand({
        name: 'ping',
        description: 'pong'
    }).catch(console.error);
});

bot.ws.on('INTERACTION_CREATE', async interaction => {
    switch (interaction.data.name) {
        case "ping":
            bot.SlashCommandManager.respond(interaction, {
                type: 3,
                data: {
                    content: `🏓 ${bot.ws.ping} ms`,
                    flags: 1 << 6
                }
            });
            break;

        default:
            bot.SlashCommandManager.respond(interaction, {
                type: 3,
                data: {
                    content: `No handler found for \`/${interaction.data.name}\``,
                    flags: 1 << 6
                }
            });
            break;
    };
});

bot.on('message', async message => {
    const guild = bot.guilds.cache.get(`724858940252487720`);

    let modmailLog = guild.channels.cache.find(c => c.name === "modmail-logs")
    let modmailCategory = guild.channels.cache.find(c => c.name === "MODMAIL")
    let channelName = `${message.author.username}-${message.author.discriminator}`.toLowerCase()
    let firstAuthor = guild.channels.cache.find(ch => ch.name === channelName)


    if (message.author.bot) return;

    if (message.channel.type === "dm") {

        if (!firstAuthor) {
            guild.channels.create(message.author.tag.split("#").join("-"), {
                type: 'text',
                reason: "Modmail",
                permissionOverwrites: [{
                    id: guild.roles.cache.find(r => r.name === "Modmail-Support").id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                }, {
                    id: guild.id,
                    deny: ['VIEW_CHANNEL']
                }]
            }).then(async m => {
                m.setParent(modmailCategory.id)
                m.setTopic(`${message.author.id}`)
                m.send({
                    embed: {
                        color: `#FFFF00`,
                        description: `Type a message in this channel to reply. Messages starting with the server prefix \`$\` are ignored, and can be used for staff discussion. Use the command \`!finish [reason]\` to close this thread.`,
                        title: 'New thread',
                        footer: {
                            text: `${message.author.tag} | ${message.author.id}`,
                            icon_url: message.author.displayAvatarURL()
                        },
                        timestamp: new Date()
                    }
                })

                await modmailLog.send({
                    embed: {
                        title: 'New Thread Created',
                        color: `#FFFF00`,
                        footer: {
                            text: `${message.author.tag} | ${message.author.id}`,
                            icon_url: message.author.displayAvatarURL({
                                dynamic: true
                            })
                        },
                        timestamp: new Date()
                    }
                })

                m.send({
                    embed: {
                        color: `#00FF00`,
                        description: message.content,
                        title: 'Message Received',
                        footer: {
                            text: `${message.author.tag} | ${message.author.id}`,
                            icon_url: message.author.displayAvatarURL()
                        },
                        timestamp: new Date()
                    }
                })
                message.author.send({
                    embed: {
                        title: 'Message Sent',
                        description: message.content,
                        footer: {
                            text: guild.name,
                            icon_url: guild.iconURL({
                                dynamic: true
                            })
                        },
                        timestamp: new Date(),
                        color: `#00FF00`
                    }
                })
            })
        } else {
            await firstAuthor.send({
                embed: {
                    color: `#00FF00`,
                    description: message.content,
                    title: 'Message Received',
                    footer: {
                        text: `${message.author.tag}`,
                        icon_url: message.author.displayAvatarURL()
                    },
                    timestamp: new Date()
                }
            })
            await message.author.send({
                embed: {
                    title: 'Message Sent',
                    description: message.content,
                    footer: {
                        text: guild.name,
                        icon_url: guild.iconURL({
                            dynamic: true
                        })
                    },
                    timestamp: new Date(),
                    color: `#00FFAB`
                }
            })
            
        }
    } else {
        if (message.guild.channels.cache.find(c => c.name === "MODMAIL")) {
            if (message.channel.parentID === message.guild.channels.cache.find(c => c.name === "MODMAIL").id) {

                if (!message.content.startsWith(prefix)) {
                    let channelName = `${message.channel.name.split("-")[0]}`
                    let channelTag = message.channel.name.split("-")[1]
                    let User = message.guild.members.cache.get(`${message.channel.topic}`)
                    message.delete()

                    let receiveEmbed = new Discord.MessageEmbed()
                        .setTitle('Message Sent')
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({
                            dynamic: true
                        }))
                        .setDescription(message.content)
                        .setColor(`#FF0000`)
                        .setFooter(`${message.author.tag} | ${message.author.id}`)
                        .setTimestamp()
                    message.channel.send(receiveEmbed)

                    let messageReceiveEmbed = new Discord.MessageEmbed()
                        .setTitle('Message Received')
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({
                            dynamic: true
                        }))
                        .setDescription(message.content)
                        .setColor(`RANDOM`)
                        .setFooter(`${message.guild.name} | ${message.guild.id}`)
                        .setTimestamp()
                    User.send(messageReceiveEmbed)
                }
            }
        }

    }
})

bot.on ("message"  , async message  =>  {
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    let command


    console.log(message.author.username);
    console.log(message.content);

    mention = message.mentions.users.first();

    const server = message.guild;


      if(message.author.bot)
          return;
      if(message.channel.type === "dm")
          return;
          
     if(message.content.startsWith(prefix + "say" )){

         message.delete();
         let schannel = message.mentions.channels.first()
         if(!schannel) schannel = message.channel;
         sendmessage = args.join(' ')

         if(sendmessage.length == 0){

             message.channel.send('Oye kya bhej raha h nub!')


         }

         schannel.send(sendmessage);




     }
     const Discord = require('discord.js')
     
bot.on("channelDelete", (channel) => {

    if (channel.parentID == channel.guild.channels.cache.find((x) => x.name == "MODMAIL").id) {
        const person = channel.guild.members.cache.find((x) => x.id == channel.name)

        if (!person) return;

        let yembed = new Discord.MessageEmbed()
            .setAuthor("Mail Deleted", bot.user.displayAvatarURL())
            .setColor('RANDOM')
            .setThumbnail(bot.user.displayAvatarURL())
            .setDescription("Your mail is deleted by moderator. If you have any problem with that than, you can open a mail again by sending messages here.")
        return person.send(yembed)

    }


})
     
    if(message.content.startsWith('https://discord.com/channels/')){
    let url = message.content
    let sus = url.split('/')
    sus.shift()
    bot.channels.fetch(sus[4])
    .then(channel =>{
      channel.messages.fetch(sus[5])
      .then(message =>{
        const em = new Discord.MessageEmbed()
          .setAuthor(`Message from ${message.author.username}`)
          .setColor(`${message.author.haxColor}`)
          .setDescription('Message: ' + '"' + message.content + '"')
          .addField("Source" , `[Jump to the source](${url})`);
        message.channel.send(em)
      })
    })
    .catch(err =>{
      console.log('A error occured')
    })
  }


    if (message.content.startsWith(prefix + "members")){

        message.channel.send(`There are ${numberomember} people in this server,<:ThugPika:717419918852882476>`)



    }
    
if (message.content.startsWith(prefix + "send")){
        
        
        if (mention == null){

            message.channel.send("Kisko bhej raha hai chutiye")
            
            
            
            return;}
       
        message.delete();
        mentionMessage = message.content.slice (5);
        mention.send (`${message.author.username}: ${mentionMessage}`);
        message.channel.send("Message sent to DMs!");
    
    }

    if(message.content.startsWith(prefix)){
    if (bot.commands.has(cmd))
    command = bot.commands.get(cmd);
    else if (bot.aliases.has(cmd))
    command = bot.commands.get(bot.aliases.get(cmd))

    if (command){
    command.run(bot, message, args);
    return
    }
    Data.findOne({
        userID: message.author.id
    },(err,data) =>{
        if(!data)
        {
            const newData = new Data({
                name: message.author.username,
                userID: message.author.id,
                money: 0,
                lb: 'all',
                xpp: 0,
                xpl: 1,
                daily: Date.now(),
                begtimer:Date.now(),
                robtimer: Date.now(),
                warns: 0,
                dailyr: Date.now() - 8.64e+7,
                weeklyr: Date.now() - 6.048e+8
            })
            newData.save().catch(err => console.log(err));
            console.log("DID WRONG")
        }
        else if(message.channel.id ==='678570369870725120' && message.channel.id === '770992903048790096'){
            data.money = data.money + 1
           
            console.log("Process completed")
         
        }
        else{
            
           
            

        }

   if(!data) return
   data.xpp = data.xpp + 1
   if(data.xpp%100 === 0 && data.xpp !== 0){
            data.xpp = 0
            data.xpl = data.xpl + 1
            message.reply(`congrats,you just progressed to level ${data.xpl}!!`)
        }
        data.save()
        

    })
}

})



bot.login(token);


