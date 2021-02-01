const Discord = require ('discord.js')

module.exports.run = (bot,message,args) => {

    let sem = new Discord.MessageEmbed()
    .setColor('FFFF00')
    .setTimestamp()

    switch(args[0]){

    

        case '1':
            sem.setTitle('Payments and Support!')
            sem.addField('pd' , 'Creates a new paytm payment thread')
            sem.addField('close' , 'Closes your payment thread')
            break;
        case '2':
            sem.setTitle('Moderation')
            sem.addField('warn @mention reason' , 'Warns mentioned user with given reason')
            sem.addField('kick @mention reason' , 'Kicks mentioned user with given reason' )
            sem.addField('ban @mention reason' , 'bans mentioned user with given reason')
            sem.addField('mute @mention reason duration' , 'mutes mentioned user for given reason for specified duration of time')
            sem.addField('unmute @mention reason' , 'unmutes muted user with reason for early unmute')
            sem.addField('purge numberofmessages' , 'purges specified number of messages' )
            break;
        case '3':
            sem.setTitle('Miscellanious Commands')
            sem.addField('+send @mention message' , 'sends message to mentioned user')
            sem.addField('+say message' , 'says message')  
            sem.addField('+members' , 'gives number of server members')
            sem.addField('+dev' , 'gives info about me')

        default:
            
            sem.setTitle('Select a command category!')
        sem.addField('Payment and Support(1)' , 'Payment and Support commands')
        sem.addField('Moderation(2)' , 'Commands exclusive to mods')
        sem.addField('Economy(3)' ,'Economy commands' )
        sem.addField('Fun(4)' , 'Vanity features and commands')
        sem.addField('Game.tv(5)',' Tournament Related commands')
        sem.addField('Miscellanious(6)' , 'Misc commands')
        sem.setDescription('Use ur command like this: +commands 2')
    }
    message.channel.send(sem)
}
module.exports.help = {
    name: 'help',
    aliases:['commands']
}
