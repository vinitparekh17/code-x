const giveMeAJoke = require('give-me-a-joke');

module.exports.run = async(bot, message, args) => {
    giveMeAJoke.getRandomDadJoke(function(joke){
      return message.channel.send(joke);
    })
}

module.exports.help = {
    name: "joke",
    aliases: ["joke"]
}
