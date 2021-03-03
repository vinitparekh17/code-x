const token = process.env.token
const  Discord  = require('discord.js');
const bot = new Discord.Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES','GUILD_MEMBERS','GUILD_PRESENCES'] } });

const prefix = "!"
const ms = require('ms')
const fs = require('fs')
const mongoose = require("mongoose");
const botconfig = require("./botconfig.json");

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()

mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )

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

bot.on("ready", async () => {
bot.user.setStatus('dnd')
 .then(console.log)
    .catch(console.error);
    console.log(  "I am READY!")

    setInterval(function() {
        numberomember =`${bot.users.cache.size}`

        let activities = [ `with my ${bot.guilds.cache.size} servers!` ,  '!ticket for Payment | !help for list of commands']

       let activity = activities[Math.floor(Math.random()*activities.length)]

       let modroles = ['653115183950200833', '730313466094813225', '551936470458433536', '732818401516453959', '732818652059140127', ]

       
       bot.user.setActivity(activity, { type: "PLAYING"})
    }, 5000)


})



bot.on ("message"  , async message  =>  {
    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();
    let command
    
    
    let pandaemojis = ['686511879459307541' , '707199467446599702' , '707116706262417440' , '707199422387453963' , ]


    console.log(message.author.username);
    console.log(message.content);

    mention = message.mentions.users.first();

    const server = message.guild;


      if (message.channel.type === 'dm') {

      if (message.author.bot) return;

         bot.users.cache.get("324442848759906314").send(`${message.author.username}: ${message.content}`);
         message.author.send("Ight,imma send that to Blazing.My DMs r closed kiddo.If you wanna contact server/tourney support,or get tourney payment,type *+help* inside the Nuclear Plays server.")

    
    return;}



      if(message.author.bot){
          return;
      }

bot.on('message', async (message) => {
const openedTickets = new Map();// New map

const ACCEPT = '<a:yesac:816648117659238462>'; // Any emoji id here
const REJECT = '<a:noac:816648236831866900>'; // Any emoji id here

module.exports.run = async(bot, message, args) => {
        if (message.author.bot) return; // checks if the user is a bot

        const mainGuild = bot.guilds.cache.get('724858940252487720'); // Your guild id here
        const modLogs = mainGuild.channels.cache.get('816649041575411733');// log channel id here

        if (message.channel.type == 'dm') { // Makes the bot listen to a dm.

            if (!openedTickets.has(message.author.id)) {
                // The ticket name which will be used lated to see if a user has a ticket
                const channel = !!mainGuild.channels.cache.find(ch => ch.name === message.author.id);
                
                // Beginning of asking the user if they'd like to send the message
                const aEmbed = new Discord.MessageEmbed() 
                    .setTitle('Support')
                    .setDescription(`Are you sure you would like to send "${message.content}" to our staff team?`)
                const msg1 = await message.channel.send(aEmbed);
                await msg1.react(ACCEPT);
                await msg1.react(REJECT);
                // End of asking the user if they'd like to send the message

                try {
                    
                    const reactionFilter = (reaction, user) => [ACCEPT, REJECT].includes(reaction.emoji.id) && !user.bot; // Checks if the message contains the emoji
                    const reactions = await msg1.awaitReactions(reactionFilter, { max: 1 });
                    const choice = reactions.get(ACCEPT) || reactions.get(REJECT);

                    if (choice.emoji.id === ACCEPT) {

                        if (channel === true) { // If the user has a ticket open

                            const mailChannel = await mainGuild.channels.cache.find(ch => ch.name === message.author.id); // sends the users message to this channel with their id

                            const cEmbed = new Discord.MessageEmbed()
                                .setTitle('Support')
                                .setDescription(`Your message "${message.content}" has been sent to the staff team.`)
                            message.author.send(cEmbed);

                            const bEmbed = new Discord.MessageEmbed()
                                .setTitle('Support')
                                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                                .setDescription(`[**${message.author.username}**] : ${message.content}`)
                            await mailChannel.send(bEmbed);

                        } else if (channel === false) { // If the user doesn't have a channel open
                        
                        // Beginning of creating channel for the user
                            const mailChannel = await mainGuild.channels.create(message.author.id, { 
                                type: 'text',
                                parent: '807121519825780736',// Put your category id here
                                permissionOverwrites: [
                                    {
                                        id: mainGuild.id,
                                        deny: ['VIEW_CHANNEL']
                                    },
                                    {
                                        id: '786165839102738462', // Any role id here
                                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                                    }
                                ]
                            });
                            // end of creating channel for the user
                            
                            modLogs.send(new Discord.MessageEmbed()// Lets staff know of new ticket
                                .setTitle('New Ticket')
                                .setDescription(`${message.author.tag} has created a new modmail ticket! ${mailChannel}`)
                            );

                            const hEmbed = new Discord.MessageEmbed()
                                .setTitle('Support')
                                .setDescription(`Your message "${message.content}" has been sent to the staff team.`)
                            message.author.send(hEmbed);

                            const vEmbed = new Discord.MessageEmbed()
                                .setTitle('Support')
                                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                                .setDescription(`[**${message.author.username}**] : ${message.content}`)
                            await mailChannel.send(vEmbed);
                        }

                    } else if (choice.emoji.id === REJECT) { // If the user rejects sending the message
                        message.author.send(new Discord.MessageEmbed()
                            .setTitle('Support')
                            .setDescription(`You have successfully denied sending the message "${message.content}" to the staff.`)
                        )
                    }
                } catch (err) {
                    openedTickets.delete(message.author.id);
                }
            }
        }
        if (!message.guild) return;
        if (message.guild.id === mainGuild.id && message.channel.parentID === '807121519825780736') { // Uses only for channels in that parent / category
            if (message.content === '!close') { // if !close command is used
                message.channel.send(new Discord.MessageEmbed()
                    .setTitle('Deleting Ticket')
                    .setDescription('I am now deleting the ticket!')
                )

                setTimeout(() => {
                    bot.users.cache.get(message.channel.name).send(new Discord.MessageEmbed()
                        .setTitle('Support')
                        .setDescription(`Your ticket is now being closed by a staff. Thank you for reaching out to us!`)
                    );
                    message.channel.delete().then(ch => {
                        modLogs.send(new Discord.MessageEmbed()
                            .setTitle('Ticket Deleted')
                            .setDescription(`${bot.users.cache.get(ch.name).tag}\'s ticket has been deleted.`)
                        )
                    })
                }, 10000);// Make sure to add 3 zeros at the end so 5 seconds would be 5000
                return
            } else if (message.content === '!no') return;
            
            // Staff can return message to the user below

            const user = bot.users.cache.get(message.channel.name);

            const bEmbed = new Discord.MessageEmbed()
                .setTitle('Support')
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setDescription(`[**${message.author.username}**] : ${message.content}`);

                user.send(bEmbed)

        }
    });
 }
     

     if(message.content.startsWith(prefix + "say" )){

         message.delete();

         sendmessage = message.content.slice(5);

         if(sendmessage.length == 0){

             message.channel.say('Oye kya bhej raha hai! <:SaaleNoob:717419994820116530>')


         }

         message.channel.send(sendmessage);




     }

    
    if (message.content.startsWith(prefix + "members")){

        message.channel.send(`There are ${numberomember} people in this server,<:ThugPika:717419918852882476>`)



    }
    if (message.content.startsWith(prefix + "apply")){

        message.react('✅');
        message.channel.send("Application form has been sent to ur dms!")

        message.author.send("https://forms.gle/6sQ4hhZmuYDwXegj8  ye lo beta,yaha jaake apply karo")

        bot.users.cache.get('551936470458433536').send(`${message.author.username} might be applying for staff roles!`);
        bot.users.cache.get('324442848759906314').send(`${message.author.username} applied for staff.`)



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


     message.content = message.content.toLowerCase();
    if(message.content.includes("pandu")){

        let ranpanda = pandaemojis[Math.floor(Math.random()*pandaemojis.length)]

        message.react(`${ranpanda}`);

    }
    if(message.content.includes("panda")){

        let ranpanda = pandaemojis[Math.floor(Math.random()*pandaemojis.length)]

        message.react(`${ranpanda}`);

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
   

    if(message.content.startsWith(prefix + "dev")){

      



    }

   

})

bot.on('guildMemberAdd' , member => 
{



 wmbd = new Discord.MessageEmbed()
 .setTitle(`${member.user.username} has joined the server`)
 .setColor('RANDOM')
 .setDescription(`✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬

 <a:hypesquad:779012310504964126>  Welcome <@${member.user.id}> <a:hypesquad:779012310504964126> 

<a:GG_true3:751658895247802429>  Read our server rules from <#751657642660855879>

<a:GG_true3:751658895247802429>  Take your roles from <#726836834541240360>

<a:GG_true3:751658895247802429>  You're ${bot.users.cache.size} member of this Server! <a:donald_clap:750700622830895204> 

✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬✫▬▬▬`)
 .setTimestamp()
 .setImage('https://cdn.discordapp.com/attachments/652183126055059469/672054114993176586/welcome-dribbble.gif')
 

bot.guilds.cache.get('724858940252487720').channels.cache.get('724859956561444884').send(wmbd)
member.send(wmbd)

});


bot.login(token);


