const command = require('./command')
const ownerId = '467004231295959040' // my discord user ID
const channelId = '797089409219821569' // private channel ID

module.exports.run = async(client) => {
  command(client, 'eval', (message) => {
    const { member, channel, content } = message

    if (member.id === ownerId && channel.id === channelId) {
      const result = eval(content.replace('!eval ', ''))
      channel.send(result)
    }
  })
}

module.exports.help = {
    name: "eval",
    aliases: ["eval"]
}
