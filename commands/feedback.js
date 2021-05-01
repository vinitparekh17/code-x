const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
		message.reply('Check dms!');
		const questions = [
			'What is your username and tag?',
			'When did you won tournament?',
			'What is your paytm number?',
			'What is your paytm assosiated name?',
			"Do you have any idea, How can we fix the bug? (If you don't, Respond with (no))"
		];

		let collectCounter = 0;
		let endCounter = 0;

		const filter = m => m.author.id === message.author.id;
		const appStart = await message.author.send(questions[collectCounter++]);
		const channel = appStart.channel;

		const collector = channel.createMessageCollector(filter);

		collector.on('collect', () => {
			if (collectCounter < questions.length) {
				channel.send(questions[collectCounter++]);
			} else {
				channel.send(`Thanks For Your Feedback`);
				collector.stop('fulfilled');
			}
		});

		collector.on('end', (collected, reason) => {
			if (reason === 'fulfilled') {
				let index = 1;
				const mapped = collected
					.map(msg => {
						return `**${index++})** | ${questions[endCounter++]}\n-> ${
							msg.content
						}`;
					})
					.join('\n\n');
					bot.guilds.cache.get(`724858940252487720`).channels.cache.get(`835898188883951627`).send(
					new MessageEmbed()
					.setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL()}`)
					.setTitle(`New Bug Reported`)
					.setDescription(mapped)
					.setColor(`#00FFAB`)
					.setTimestamp()
				);
			}
		});
	}
	
	module.exports.help = {
	    name: "submit",
	    aliases: []
	}