const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json'); //Hippercos By Proxima Centauri

exports.run = async(client, message, args) => {
    if (message.member.voiceChannel) {
        message.channel.send('Ses Veriyorum Dinle...')
        const baglanti = await message.member.voiceChannel.join();
        const seslikanal = message.member.voiceChannel;
        const oynat = baglanti.playStream(`https://www.youtube.com/watch?v=z3wAjJXbYzA`);
        oynat.on('end', () => seslikanal.leave());
    } else {
        message.reply('Önce Bir Ses kanalına katılmanız gerekir!');
    }

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mekanınsahibi',
  description: 'Dene ve Gör :)',
  usage: 'mekanınsahibi'
};