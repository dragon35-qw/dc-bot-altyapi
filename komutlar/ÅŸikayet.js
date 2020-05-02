const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  const öneri = args.slice(0).join(" ");
  if (!öneri) return message.channel.send("şikayetiniz nedir?");
  var guildID = "704341539610165320";
  var channelID = "704343288152588369"

  await client.guilds
    .get(guildID)
    .channels.get(channelID)
    .send({
      embed: {
        color: 0x0099ff,
        title: "Yeni Bir Şikayet daha!",
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
            value: "Şikayet"
          },
          {
            name: "Kullanıcı:",
            value: message.author.tag + " | " + message.author.id
          },
          {
            name: "Şikayeti:",
            value: öneri .D
          }
        ],
        footer: {
          text: client.user.tag + " | Şikayet sistemi",
          icon_url: client.user.avatarURL
        }
      }
    });

  await message.channel.send("Şikayetiniz destek sunucusuna gelmiştir eğer cevap gelmezse bot geliştircisine ulaşın").then(msg => {
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
  name: "şikayet",
  description: "Şikayetinizi botun kurucularına atar",
  usage: "şikayet"
};
