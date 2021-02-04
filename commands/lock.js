const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
if(!message.member.haspermissiom(MANAGE_CHANNELS))
