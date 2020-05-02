const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json'); //Hippercos By Proxima Centauri

exports.run = async(client, message, args) => {
    if (message.member.voiceChannel) {
        message.channel.send('Ses Veriyorum Dinle...')
        const baglanti = await message.member.voiceChannel.join();
        const seslikanal = message.member.voiceChannel;
        const oynat = baglanti.playStream(`https://cdn.glitch.com/adf3cee5-d857-4624-b607-755229c5a456%2FYand%C4%B1m%20dedik%C3%A7e%20buz%20gibi%20ayran%20edal%C4%B1%20cilveli%20lahmacun%20_%20_.mp3`);
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
  name: 'lahmacun',
  description: 'Dene ve Gör :)',
  usage: 'lahmacun'
};