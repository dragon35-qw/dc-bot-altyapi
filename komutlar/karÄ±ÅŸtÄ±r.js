const Discord = require('discord.js');
const funnyWords = require('funny-words');

exports.run = async(yashinu, message, args) => {
  if(!args[0]) return message.reply('Karıştırılacak sözcükleri girmezsen olmaz ki!')
  message.channel.send(funnyWords(args.join(' ')))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'karıştır',
  description: 'Yazdığınız sözcükleri karıştırır.',
  usage: 'karıştır',
  kategori: 'eğlence'
};