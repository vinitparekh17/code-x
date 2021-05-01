const sourcebin = require('sourcebin_js');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(message.channel.name.startsWith('closed')) return message.reply(`This channel is already closed!`)
		if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.topic.split('ID - ').join(''));
			if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.tag}`) {
				message.channel.messages.fetch().then(async (messages) => {
					const output = messages.array().reverse().map(m => `${new Date(m.createdAt).toLocaleString('en-US')} - ${m.author.tag}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`).join('\n');

					let response;
					try {
						response = await sourcebin.create([
							{
								name: ' ',
								content: output,
								languageId: 'text',
							},
						], {
							title: `Chat transcript for ${message.channel.name}`,
							description: ' ',
						});
					}
					catch(e) {
						return message.channel.send('An error occurred, please try again!');
					}

					const embed = new MessageEmbed()
						.setDescription(`[CLICK HERE TO VIEW TRANSCRIPT](${response.url})`)
						.setTimestamp()
						.setColor('#00FF00');
					member.send('Here is a transcript of your ticket, please click the link below to vew the transcript', embed)
				}).then(() => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send({ embed: { color: "#FF0000", description: `**Ticket has been closed by ${message.author.username}**`} })
													message.channel.setName(`closed-${message.author.username}`)
						});

						
					}
					catch(e) {
						return message.channel.send(e);
					}
				});
			}
		}
		else {
			return message.reply('you cannot use this command here. Please use this command when you\'re closing a ticket.');
		}
	}
	
	module.exports.help = {
	    name: "close ticket",
	    aliases: ["close"]
	}