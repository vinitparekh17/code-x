const { Permissions } = require('discord.js');

module.exports.run = async(bot, message, args) => {
		await message.delete();
		const msg = await message.channel.send('Please provide the link of the embed you would like to edit.');
		const awaited = await message.channel.awaitMessages(
			msg => msg.author.id === message.author.id,
			{ max: 1, time: 60000, errors: ['time'] }
		).catch(() => null);

		if (!awaited) {
			return msg.edit(`{<a:error:837716622633730048>} The command timed-out, please type the command to try again!`, { embed: null });
		}

		const m = awaited?.first();
		await m.delete();
		if (m?.content?.toLowerCase() === 'stop') {
			return msg.edit(`<a:success:837582423528308776> Command successfully terminated!`, { embed: null });
		}

		await msg.edit(' What message would you like to send?');
		const res = await message.channel.awaitMessages(
			msg => msg.author.id === message.author.id,
			{ max: 1, time: 30000, errors: ['time'] }
		).catch(() => null);

		if (!res) {
			return msg.edit(`<a:error:837716622633730048> The command timed-out, please type the command to try again!`, { embed: null });
		}

		const mText = res.first();
		if (mText?.content?.toLowerCase() === 'stop') {
			return msg.edit(`<a:success:837582423528308776> Command successfully terminated!`, { embed: null });
		}

		const messageID = m.content.split('/').filter(d => d.length).reverse()[0];
		const channelID = m.content.split('/').filter(d => d.length).reverse()[1];
		const channel = message.guild.channels.cache.get(channelID);
		const foundMsg = await channel?.messages.fetch(messageID).catch(() => null);
		if (!foundMsg) {
			return msg.edit(
				'I could not find that message.',
				{ embed: null }
			);
		}

		await foundMsg.edit({
			embed: {
				color: '#00FF00',
				description: mText.content
			}
		});

		return msg.edit(
			'<a:success:837582423528308776> Successfully edited the message.',
			{ embed: null }
		);
}

module.exports.help = {
    name: "edit",
    aliases: []
}
