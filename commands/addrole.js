const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("❌**Error:** I don't have the **Manage Roles** permission!");
    if (message.mentions.users.size === 0) return message.reply("❌Please mention a user to give the role to.\nExample: `addrole @user Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("❌**Error:** That user does not seem valid.");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.cache.find(val => val.name === rname) || message.mentions.roles.first();
    if (!role) return message.reply(`❌**Error:** ${rname} isn't a role on this server!`);
    let botRolePosition = message.guild.member(bot.user).roles.highest.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.roles.highest.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Failed to add the role to the user because your role is lower than the specified role.")
    if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** Failed to add the role to the user because my highest role is lower than the specified role.");
    member.roles.add(role).catch(e => {
        return message.channel.send(`❌**Error:**\n${e}`);
    });
    message.channel.send(`<:Yes:831428306339102720> **${message.author.username}**, I've added the **${rname}** role to **${message.mentions.users.first().username}**.`);
}

module.exports.help = {
    name: "addrole",
    aliases: ["addrole"]
}
