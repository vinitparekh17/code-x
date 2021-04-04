module.exports.run = async(message, [emoji, name]) => {
    if(!emoji || !name) return message.send(`Usage: \`!steal <url to image or emoji id> <name to save as>\``);
    if(emoji.includes("http")) return this.create(message, emoji, name);
    const e = this.client.emojis.cache.get(emoji);
    if(e) return this.create(message, e.url, name, "Something went wrong.");
    const url = `https://cdn.discordapp.com/emojis/${emoji}.png`;
    return this.create(message, url, name, "Couldn't create emoji, make sure the ID is valid.");
  }
  
  async create(message, url, name, err = "Something went wrong, make sure the URL is valid and returns an image.") {
    const emoji = await message.guild.emojis.create(url, name).catch(() => {
      throw err;
    });
    message.channel.send(`Done! created new emoji ${emoji.name} ${emoji.toString()}`);
  }
  
  module.exports.help = {
      name: "steal",
      aliases: ["steal"]
  }
