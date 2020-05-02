const Discord = require('discord.js')
exports.run = (client, message) => {
const frenzy = new Discord.RichEmbed()
.setTitle('Aşağğı Bak '+message.author.tag)
.setTimestamp()
.setFooter('Saat >>>')
.setColor('Random')
message.channel.send(frenzy)
}
exports.conf = {
    enabled: false,
    guildOnly: false,
  aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'saat',
    description: 'saat',
    usage: 'saat'
  };