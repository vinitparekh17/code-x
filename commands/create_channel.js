const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
module.exports = class CreateChannelCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'createchannel',
			aliases: ['createc','cc','channel'],
			group: 'manage server',
			memberName: 'createchannel',
			description: 'Creates a channel, with a name and permissions (optional).',
            ownerOnly: false,
            clientPermissions: ['MANAGE_CHANNELS'],
            args: [
                {
                    key: 'name',
                    prompt: 'What would you like the name of the channel to be?',
                    type: 'string',
                },
                {
                    key: 'style',
                    prompt: 'What kind of channel is this: text or voice?',
                    type: 'string',
                }
            ]
        });
    };
    run(message, {name}, {style}) {
        if (style === 'voice') {
            message.guild.channels.create(name, {
                type: 'voice'
            });
        } else {
            message.guild.channels.create(name, {
                type: 'text'
            });
        };
        console.log(name);
        console.log(style);
    };
};

