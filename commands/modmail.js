const Discord = require('discord.js'); // Npm install discord.js
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
    }
    
    module.exports.help = {
        name: "modmail",
        aliases: []
    }
