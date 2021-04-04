module.exports.run = async(bot, message, args[emoji, name]) => {
    if(!emoji || !name) return message.send(`Usage: \`!steal <url to image or emoji id> <name to save as>\``);
    if(emoji.includes("http")) return this.create(message, emoji, name);
    const e = this.client.emojis.cache.get(emoji);
    if(e) return this.create(message, e.url, name, "Something went wrong.");
    const url = `https://cdn.discordapp.com/emojis/${emoji}.png`;
    return this.create(message, url, name, "Couldn't create emoji, make sure the ID is valid.");

    const emoji = await message.guild.emojis.create(url, name).catch(() => {
    message.channel.send(`Done! created new emoji ${emoji.name} ${emoji.toString()}`);
  }
  
  module.exports.help = {
      name: "steal",
      aliases: ["steal"]
  }
