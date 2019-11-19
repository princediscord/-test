const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "-";

/*دخول البوت*/

client.on("guildCreate", guild => {
  client.channels.get("444823868532850708").send(' ***  BOT  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

client.on("guildDelete", guild => {
  client.channels.get("646107866977140745").send(' ***  BOT  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});


client.login(process.env.BOT_TOKEN);
