const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    
    channel.setParent("807121519825780736");

    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });
    
    

    const reactionMessage = await channel.send("Thank you for contacting support!");

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
           channel.send({ embed: { color: "YELLOW", description: `Ticket Closed by ${message.author.username}`}})
           channel.send({embed: { color: "RED", description: `:bookmark_tabs: Save transcript\n:unlock: Reopen Ticket\n:no_entry: Delete Ticket`}})
          channel.updateOverwrite(message.author, { VIEW_CHANNEL: false });
          break;
        case "⛔":
          channel.send({ embed: { color: "RED", description: `Ticket will be deleted in 5 seconds`}} );
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`We will be right with you! ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
        setTimeout(() => message.delete(), 3000);
      })
      .catch((err) => {
        throw err;
      });
  }
  
  module.exports.help = {
      name: "tst",
      aliases: []
  }
