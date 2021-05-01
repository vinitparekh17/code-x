const { MessageEmbed } = require("discord.js");

const _ = require("lodash");
module.exports.run = async(bot) => {

  // Finding Guild
  const guild = bot.guilds.cache.get("724858940252487720");

  // Finding log channel
  const logChannel = guild.channels.cache.get("809800804868292680");

  // Message Delete
  bot.on("messageDelete", (message) => {
    if (logChannel) {
      if (message.author.bot) {
        return;
      } else {
        const embed = new MessageEmbed()
          .setTitle(`The Champion Logs`)
          .setDescription(
            `Message deleted in \`#${message.channel.name}\`\f
                Message: ${message}\f
                User: ${message.author.tag}`
          )
          .setAuthor(
            `Champion Moderator`,
            `${bot.user.displayAvatarURL({ format: "png" })}`
          )
          .setTimestamp()
          .setColor("#9E01CB")
          .setFooter(`Author ID: ${message.author.id}`);
        logChannel.send(embed);
      }
    } else return;
  });

  // User banned
  bot.on("guildBanAdd", async (guild, user) => {
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_BAN_ADD",
    });

    const banLog = fetchedLogs.entries.first();

    const { executor, target, reason } = banLog;

    if (!reason) reason = "Not specified";

    if (target.id === user.id) {
      const embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setDescription(
          `**User Banned**\f
              Moderator: ${executor}\f
              User: ${target}\f
              Reason: ${reason}`
        )
        .setAuthor(
          `Champion Moderator`,
          `${bot.user.displayAvatarURL({ format: "png" })}`
        )
        .setFooter(`User ID: ${target.id}`)
        .setTimestamp()
        .setColor("RED")
        .setTimestamp();
      logChannel.send(embed);
    }
  });

  // User Unbanned
  bot.on("guildBanRemove", async (guild, user) => {
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_BAN_REMOVE",
    });

    const unbanLog = fetchedLogs.entries.first();

    const { executor, target } = unbanLog;

    if (target.id === user.id) {
      const embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setDescription(
          `**User Unbanned**\f
              Moderator: ${executor}\f
              User: ${target.tag}`
        )
        .setAuthor(
          `Champion Moderator`,
          `${bot.user.displayAvatarURL({ format: "png" })}`
        )
        .setFooter(`User ID: ${target.id}`)
        .setTimestamp()
        .setColor("GREEN")
        .setTimestamp();
      logChannel.send(embed);
    }
  });

  // User Kicked
  bot.on("guildMemberRemove", async (member) => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
      limit: 1,
      type: "MEMBER_KICK",
    });
    const kickLog = fetchedLogs.entries.first();

    const { executor, target, reason } = kickLog;

    if (!reason) reason = "Not specified";

    if (target.id === user.id) {
      const embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setDescription(
          `**User Kicked**\f
              Moderator: ${executor}\f
              User: ${target.tag}\f
              Reason: ${reason}`
        )
        .setAuthor(
          `Champion Moderator`,
          `${bot.user.displayAvatarURL({ format: "png" })}`
        )
        .setFooter(`User ID: ${target.id}`)
        .setTimestamp()
        .setColor("RED")
        .setTimestamp();
      logChannel.send(embed);
    }
  });

  // Role Created
  bot.on("roleCreate", async (role) => {
    const { id } = role;

    const embed = new MessageEmbed()
      .setTitle(`The Champion Logs`)
      .setColor("YELLOW")
      .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
      .setDescription("A new role was created!")
      .setFooter(`Role ID: ${id}`)
      .setTimestamp();

    logChannel.send(embed);
  });

  // Role Deleted
  bot.on("roleDelete", async (role) => {
    const { color, name, id } = role;

    const embed = new MessageEmbed()
      .setTitle(`The Champion Logs`)
      .setColor(color)
      .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
      .setDescription(
        `**Role Deleted**\f
      Name: ${name}\f
      HEX: #${color}\f
      `
      )
      .setFooter(`Role ID: ${id}`)
      .setTimestamp();

    logChannel.send(embed);
  });

  // Role Updated
  bot.on("roleUpdate", async (oldRole, newRole) => {
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: "ROLE_UPDATE",
    });

    const roleLog = fetchedLogs.entries.first();

    const { id } = roleLog;

    var embed = {};
    if (oldRole.name === newRole.name && oldRole.color === newRole.color) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor(newRole.color)
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Role Updated**\f
      Same Name: \`${newRole.name}\`\f
      Same Color: \`#${newRole.color}\`\f
      Could be new permissions?`
        )
        .setFooter(`Role ID: ${id}`)
        .setTimestamp();
    } else if (oldRole.name === newRole.name) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor(newRole.color)
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Role Updated**\f
      Same Name: \`${newRole.name}\`\f
      Old Color: \`#${oldRole.color}\`\f
      New Color: #${newRole.color}
      `
        )
        .setFooter(`Role ID: ${id}`)
        .setTimestamp();
    } else if (oldRole.color === newRole.color) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor(newRole.color)
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Role Updated**\f
    Old Name: \`${oldRole.name}\`\f
    New Name: ${newRole.name}\f
    Same Color: \`#${newRole.color}\`\f
    `
        )
        .setFooter(`Role ID: ${id}`)
        .setTimestamp();
    }

    logChannel.send(embed);
  });

  // Invite Created
  bot.on("inviteCreate", async (invite) => {
    const { code, inviter, channel } = invite;

    let chanType;
    if (channel.type === "text") {
      chanType = "Text";
    } else if (channel.type === "voice") {
      chanType = "Voice";
    } else if (channel.type === "news") {
      chanType = "News";
    }

    const embed = new MessageEmbed()
      .setTitle(`The Champion Logs`)
      .setColor("#FFC0CB")
      .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
      .setDescription(
        `**Invite Created**\f
        Inviter: <@${inviter.id}>\f
        Channel: <#${channel.id}>\f
        Channel Type: \`${chanType}\``
      )
      .addField('Invite URL:', `https://discord.gg/${code}`, true)
      .setFooter(`discord.gg/${code}`)
      .setTimestamp();

    logChannel.send(embed);
  });

  // Channel Created
  bot.on("channelCreate", (GuildChannel) => {
    if (!GuildChannel) {
      return;
    }

    const { type, id, name, nsfw } = GuildChannel;

    let noSafe;

    if (nsfw === false) {
      noSafe = "No";
    } else if (nsfw === true) {
      noSafe = "Yes";
    }

    const embed = new MessageEmbed()
      .setTitle(`The Champion Logs`)
      .setColor("#3eb489")
      .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
      .setDescription(
        `**New Channel**\f
        Channel: <#${id}>\f
        Channel Type: \`${type}\`\f
        NSFW?: \`${noSafe}\``
      )
      .setFooter(`Channel ID: ${id}`)
      .setTimestamp();

    logChannel.send(embed);
  });

  // Channel Deleted
  bot.on("channelDelete", (GuildChannel) => {
    if (!GuildChannel) {
      return;
    }

    const { type, id, name } = GuildChannel;

    const embed = new MessageEmbed()
      .setTitle(`The Champion Logs`)
      .setColor("#3eb489")
      .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
      .setDescription(
        `**Channel Deleted**\f
        Channel Name: \`${name}\`\f
        Channel Type: \`${type}\``
      )
      .setFooter(`Channel ID: ${id}`)
      .setTimestamp();

    logChannel.send(embed);
  });

  // Channel Updated
  bot.on("channelUpdate", async (oldChannel, newChannel, GuildChannel) => {
    const fetchedLogs = await guild.fetchAuditLogs({
      limit: 1,
      type: "CHANNEL_UPDATE",
    });

    const chanLog = fetchedLogs.entries.first();

    const { id, target, changes, nsfw } = chanLog;

    const diff = _.first(changes);

    let chanType;
    if (newChannel.type === "text") {
      chanType = "Text";
    } else if (newChannel.type === "voice") {
      chanType = "Voice";
    } else if (newChannel.type === "news") {
      chanType = "News";
    }

    let chanTy;
    if (oldChannel.type === "text") {
      chanTy = "Text";
    } else if (oldChannel.type === "voice") {
      chanTy = "Voice";
    } else if (oldChannel.type === "news") {
      chanTy = "News";
    }

    let noSafe;
    if (newChannel.nsfw === false) {
      noSafe = "No";
    } else if (newChannel.nsfw === true) {
      noSafe = "Yes";
    }

    let embed;

    if (
      oldChannel.name === newChannel.name &&
      oldChannel.type === newChannel.type &&
      oldChannel.nsfw === newChannel.nsfw
    ) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor("#40e0d0")
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Channel Update**\f
        Same Name: \`${target.name}\`\f
        Same Type: \`${chanType}\`\f
        NSFW: \`${noSafe}\`\f
        Maybe Permissions changed?`
        )
        .setFooter(`Channel ID: ${target.id}`)
        .setTimestamp();
    } else if (oldChannel.name !== newChannel.name) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor("#40e0d0")
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Channel Update**\f
        Old Name: \`${oldChannel.name}\`\f
        New Name: ${newChannel.name}\f
        Same Type: \`${chanType}\`\f
        NSFW: \`${noSafe}\``
        )
        .setFooter(`Channel ID: ${target.id}`)
        .setTimestamp();
    } else if (oldChannel.type !== newChannel.type) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor("#40e0d0")
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Channel Update**\f
        Same Name: \`${target.name}\`\f
        Old Type: \`${chanTy}\`\f
        New Type: ${chanType}\f
        NSFW: \`${noSafe}\``
        )
        .setFooter(`Channel ID: ${target.id}`)
        .setTimestamp();
    } else if (oldChannel.nsfw !== newChannel.nsfw) {
      embed = new MessageEmbed()
        .setTitle(`The Champion Logs`)
        .setColor("#40e0d0")
        .setAuthor("Champion Moderator", bot.user.displayAvatarURL())
        .setDescription(
          `**Channel Update**\f
        Same Name: \`${target.name}\`\f
        Same Type: \`${chanType}\`\f
        NSFW: ${noSafe}`
        )
        .setFooter(`Channel ID: ${target.id}`)
        .setTimestamp();
    }

    logChannel.send(embed);
  });
}

module.exports.help = {
    name: "logs",
    aliases: []
}