const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  let abc = args.join(' ');
  if(!args[0]) return message.reply('Aratacağın kullanıcının adını belirtmelisin!')
  message.channel.send(`# Bulunan Kullanıcılar (${client.users.filter(user => user.tag.toLowerCase().includes(abc.toLowerCase())).size} adet) \n\n▫ ${client.users.filter(user => user.tag.toLowerCase().includes(abc.toLowerCase())).map(x => x.tag).join('\n▫ ')}`, {code: "xl", split: true})
};
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-bul', 'üye-ara', 'kullanıcı-ara'],
  permLevel: 0,
};

exports.help = {
  name: "kullanıcıara",
  description: "Belirtilen isimdeki kullanıcıyı arar.",
  usage: "kullanıcıara <isim>",
  kategori: 'kullanıcı'
};