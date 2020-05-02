const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  const öneri = args.slice(0).join(" ");
  if (!öneri) return message.channel.send("öneriniz nedir?");
  var guildID = "704341539610165320";
  var channelID = "704343258175635456"

  await client.guilds
    .get(guildID)
    .channels.get(channelID)
    .send({
      embed: {
        color: 0x0099ff,
        title: "Yeni Bir Öneri daha!",
        author: {
          name: message.author.tag,
          icon_url: message.author.avatarURL
            ? message.author.avatarURL
            : client.user.avatarURL
        },
        timestamp: new Date(),
        fields: [
          {
            name: "Eylem:",
            value: "Öneri"
          },
          {
            name: "Kullanıcı:",
            value: message.author.tag + " | " + message.author.id
          },
          {
            name: "Önerisi:",
            value: öneri
          }
        ],
        footer: {
          text: client.user.tag + " | Öneri sistemi",
          icon_url: client.user.avatarURL
        }
      }
    });

  await message.channel.send("Öneriniz destek sunucusuna gelmiştir eğer cevap gelmezse nickiniz e ulaşın").then(msg => {
    message.delete(3000);
    msg.delete(3000);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "öneri",
  description: "Önerilerinizi botun kurucularına atar",
  usage: "öneri"
};
