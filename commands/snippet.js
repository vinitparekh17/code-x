const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async(bot, message, args) => {
      if (args[0].toLowerCase() === "add") {
      var name = args[1];
      if (!name) return reply(this.client.config.emojis.redTick + " You have to specify a keyword for this snippet.");
      name = name.toLowerCase();
      const contents = args.slice(2).join(" ");
      if (!contents) return reply(this.client.config.emojis.redTick + " You have to specify a content for this snippet.");

      await (new Snippets({
        keyword: name,
        content: contents
      }).save());

      return reply(`${this.client.config.emojis.greenTick} Snippet \`${name}\` has been added. To use it, inside an active ticket channel type \`s-<name of the snippet>\`, without including <>, for instance \`s-${name}\``);
    } else if (args[0].toLowerCase() === "delete") {
      var name = args[1];
      if (!name) return reply(this.client.config.emojis.redTick + " You have to specify a snippet to delete, see a list of them with the `view` option of this command.");
      name = name.toLowerCase();
      const deleted = await Snippets.findOneAndDelete({ keyword: name });
      if (!deleted) return reply(`${this.client.config.emojis.redTick} No snippet found.`);
      return reply(`${this.client.config.emojis.greenTick} Snippet deleted.`);
    } else if (args[0].toLowerCase() === "view") {
      const snippts = await Snippets.find();
      for (const snippt of snippts) {
        reply(`Snippet: \`\`\`${snippt.keyword}\`\`\`\nContent: \`\`\`${snippt.content}\`\`\``);
      }
   }
}

module.exports.help = {
    name: "snipet",
    aliases: ["snippet"]
}
