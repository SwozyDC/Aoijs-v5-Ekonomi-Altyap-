const vortexdev = require("aoi.js");

var fs = require("fs");

const bot = new vortexdev.Bot({

  token: process.env.token, //.env dosyasında token yazan variablenin değerine tokeninizi yazın

  prefix: "?",

  fetchInvites: true

});

bot.onBanAdd();

bot.onBanRemove();

bot.onMessageDelete();

bot.onMessageUpdate();

bot.onLeave();

bot.onJoined();

bot.onInviteCreate();

bot.onInviteDelete();

bot.onChannelCreate();

bot.onChannelDelete();

bot.onChannelUpdate();

bot.onRoleCreate();

bot.onRoleDelete();

bot.onRoleUpdate();

bot.onMessage();

var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"));

for (const file of reader) {

  const command = require(`./komutlar/${file}`);

  bot.command({

    name: command.name,

    code: command.code

  });

}

bot.variables({
param:"0",
banka:"0",
}) 
