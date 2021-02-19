const { Mongoose } = require('mongoose');
const log = require('../../database/schemas/logSchema');
const name = 'logchannel';

module.exports.run = async(bot, message) => {
        try {
            message.delete();

            if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Do Not Have Permission To Set Log Channel**').then(message => message.delete({ timeout: 4000 }));

            const channel = message.mentions.channels.first()
            if (!channel) return message.reply('**I cannot Find This Channel**').then(m => m.delete({ timeout: 3000 }));


            await log.findOne({
                guildID: message.guild.id
            }, async (err, data) => {
                if (err) console.error(err);
                if (!data) {
                    const newLog = new log({
                        _id: mongoose.SchemaTypes.ObjectId(),
                        guildID: message.guild.id,
                        logChannel: channel.id
                    });
                    await newLog.save()
                    .then(result => console.log(result))
                    .catch(err => console.log(err));

                    return message.reply(`Log channel has been updated to ${channel}`);
                } else {
                    log.updateOne({
                        logChannel: channel.id
                    })
                    .then(result => console.log(result))
                    .catch(err => console.log(err));

                    return message.reply(`Log channel has been updated to ${channel}`);
                }
            })
        } catch (error) {
            require('../../structures/on_error')(client, error, name);
        }
    }

module.exports.help = {
    name: "log",
    aliases: ["setup"]
}
