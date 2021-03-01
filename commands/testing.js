const Discord = require('discord.js');
module.exports.run = async(client, message, args) => {
        const reactionEmojis = ["⬅️","➡️", "❌"];
        const StartEmbed = new Discord.MessageEmbed()
            .setAuthor("Help Embed", message.author.displayAvatarURL({ format: "png" }))
            .setColor("RED")
            .setFooter(`Page 1`);

        const startMessage = await message.channel.send("", { embed: StartEmbed });

        const filter = (reaction, user) => reactionEmojis.includes(reaction.emoji.name) && user.id === message.author.id;

        const collector = startMessage.createReactionCollector(filter, { time: 1000 * 60 * 5 });

        const history = [];
        let cmdPages = [];


        collector.on("collect", (reaction, user) => {

            switch (reaction.emoji.name) {
                case "⬅️":
                    
                    const oldEmbed = history.pop();
                    if (oldEmbed) {
                        if (startMessage.embeds[0].author.name.includes("Command") && oldEmbed.author.name.includes("Embed")) pageType = "home";

                        startMessage.edit("", { embed: oldEmbed });
                    }

                break;
                case "➡️":

                    if (pageType === "home") {
                        if (page !== 0) page--;
                    } else if (pageType === "commands") {
                        if (commandPage !== 0) commandPage--;
                    }

                break;
                case "➡️":
                    if (pageType === "home") {
                        if (page !== pages.length - 1) page++;
                    } else if (pageType === "commands") {
                        if (commandPage !== cmdPages.length - 1) commandPage++;
                    }
                break;
                case "❌":
                    return collector.stop("Ended By User");
            }

        });

        collector.on("end", (reason) => {

            if (reason === "Ended By User") {

                const endEmbed = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png" }))
                    .setColor("RED")
                    .setDescription("Ended by User");
                return startMessage.edit("", { embed: endEmbed });

            } else {
                const endEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ format: "png" }))
                    .setColor("RED")
                    .setDescription("Timed Out");
                return startMessage.edit("", { embed: endEmbed });
            }

        });

        function handleReactions(index) {

            const data = pages[page][index];
            if (pageType === "home" && data) {

                cmdPages = [];
                const pageData = commands.filter(c => c.category === data).map(c => c.name);

                const cmdsEmbed = new MessageEmbed()
                    .setColor("RED")
                    .setAuthor("Command Help", message.author.displayAvatarURL({ format: "png" }));

                for (let i = 0; i < pageData.length; i += 6) {
                    cmdPages.push(pageData.slice(i, i + 6));
                }

                cmdsEmbed.setFooter(`Page {commandPage + 1}/{cmdPages.length}`);

                const initialCmdData = cmdPages[commandPage];

                const mappedCommands = initialCmdData.map((v, i) => [emojis[i], v]);

                for (const info of mappedCommands) {
                    commandEmbed.addField(info[1], `Click ${info[0]} to view`);
                }

                    const cmdEmbed = new Discord.MessageEmbed()
                        .setAuthor(`{command.name} Help`, message.author.displayAvatarURL({ format: "png" }))
                        .setColor("RED")
                        .setDescription(`dff`);
                    
                    history.push(startMessage.embeds[0]);

                    return startMessage.edit("", { embed: cmdEmbed });

                }


            }

        }

module.exports.help = {
    name: "test1",
    aliases: ["testing"]
}
