const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "-";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '-help') {
    msg.reply('**تــم الارسـال خـاص');
  }
});
/*دخول البوت*/

client.on("guildCreate", guild => {
  client.channels.get("661480511176179712").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

client.on("guildDelete", guild => {
  client.channels.get("661480511176179712").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
      .setDescription(`
      
      **
      
      ╭━━━┳╮╱╱╱╱╱╱╱ ╭━━╮╱╱╱╱╭╮
      ┃╭━╮┃┃╱╱╱╱╱╱╱ ┃╭╮┃╱╱╱╭╯╰╮
      ┃╰━╯┃┃╭╮╭┳━━╮ ┃╰╯╰┳━━╋╮╭╯
      ┃╭━━┫┃┃┃┃┃━━┫ ┃╭━╮┃╭╮┃┃┃
      ┃┃╱╱┃╰┫╰╯┣━━┃ ┃╰━╯┃╰╯┃┃╰╮
      ╰╯╱╱╰━┻━━┻━━╯ ╰━━━┻━━╯╰━╯
      **
      
      ***General Commands***
      **
      『${prefix}id/ معلومات عن حسابك』
      『${prefix}2id / معلومات عن الحساب في صوره』
      『${prefix}embed/ يكرر كلامك بمبيد』
      『${prefix}sug/ الإقتراحات』
      『${prefix}roles/ يطلع الرتب』
      『${prefix}roles-n يعطيك الرتب بالترتيب』
      『${prefix}server/ معلومات عن السيرفر』
      『${prefix}image/ يعرض صوره السيرفر』
      『${prefix}avatar/ يعرض صورتك او صوره شخص』
      『${prefix}dt/يعرض لك الوقت والتاريخ واليوم 』
      『${prefix}invites/ يعرض كم ضياف 』
      『${prefix}topinvite/ لعرض قائمه فيها كل واحد ضاف كم 』
      『${prefix}zalgo / يزخرف لك شي تكتب لازم يكون انقليزي مو عربي』
      『${prefix}draw / يكرر الكلام في صوره』
      『${prefix}say / يكرر الكلام لتكتب』
      『${prefix}translate / يترجم』
      『${prefix}botserver / يحطيك سرفرات البوت بترتيب』
      『${prefix}short / اختصار الروابط』
      『${prefix}calculate / حاسبة』
      **
      ***Administrative Commands***
      **
      『${prefix}color 50 /انشاء 50 لون』
      『${prefix}color 100/انشاء 100 لون』
      『${prefix}color 140/انشاء 140 لوم』
      『${prefix}ct /انشاء روم كتابي』
      『${prefix}cv /انشاء روم صوتي』
      『${prefix}delet / مسح روم』
      『${prefix}bc /لإرسال رسالة جماعية』
      『${prefix}clear / لمسح الشات』
      『${prefix}addrole / لراية اوامر اعطاء الرتبه او حدفها للعضو』
      **
      ***Bot Commands***
      **
      『${prefix}ping/ يعرض لك سرعه اتصال البوت』
      『${prefix}uptime/ يعرض لك صار للبوت كم شغال』
      『${prefix}support/ سيرفر الدعم القني و المساعده』
      『${prefix}invite/ اضافه البوت』
      『${prefix}mb/ حاله الاعضاء』
      『${prefix}bot/ معلومات عن البوت』
      **
      ***Games Commands***
      **
      『${prefix}لعبه صراحه/صراحه』
      『${prefix}لعبه خواطر/خواطر 』
      『${prefix}يعطيك ذكر من الاذكار/ اذكار』
      『${prefix}يخيرك بين شي وشي / لو خيروك』
      『${prefix}يعطيك عقاب و لازم تنفذه/ عقاب』
      『${prefix}لعبه اسئله / كت』
      『${prefix}للعب لعبه قلب العمله/ عمله』
      『${prefix}للعب لعبه عل تعلم/ هل تعلم』
      『${prefix}للعب لعبه مريم/ مريم』
      『${prefix}يعطيك كلمات حب/ حب』
      **
      ***profile Commands***
      
      『soon』
      
      _ _---------------- _ _
      BOT By: |<@630168565752004621>|
      
      **
      
      `)
   message.author.sendEmbed(embed)
   
   }
   });  


client.login(process.env.BOT_TOKEN);
