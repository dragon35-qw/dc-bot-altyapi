const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let sunucular = client.guilds.array().sort((a, b) => b.memberCount - a.memberCount).slice(0, 10);
  message.channel.send(new Discord.RichEmbed().setColor('2F3136').setDescription(sunucular.map((sunucu, index) => `${index+1}-) ${sunucu.name} | ${sunucu.memberCount}`).join('\n')).setFooter(message.author.tag + " tarafından istendi!").setTitle(client.user.username + " Top 10 Sunucular").setTimestamp());
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = { 
  name: 'top10', 
  description: 'Botun ilk 10 sunucusunu listeletir.',
  usage: 'top10',
  kategori: 'kullanıcı'
};