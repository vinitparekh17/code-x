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

})



bot.login(token);


