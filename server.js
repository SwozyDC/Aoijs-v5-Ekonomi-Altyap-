var fs = require("fs");
const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "?",
  intents: "all",
  fetchInvites: true,
});
bot.onInteractionCreate();
bot.onJoin();
bot.onLeave();
bot.onMessage(); //enables bot to see messages (required for executing Commands)
var reader = fs
  .readdirSync("./komutlar")
  .filter((file) => file.endsWith(".js"));
for (const file of reader) {
  const command = require(`./komutlar/${file}`);
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases,
    nonPrefixed: command.nonPrefixed,
  });
}

bot.variables({
param:"0",
banka:"0",
}) 

bot.command({
  name: "çek-hepsi",
  code: `
$setGlobalUserVar[banka;$sub[$getGlobalUserVar[banka;$authorID];$getGlobalUserVar[banka;$authorID]];$authorID]
$setGlobalUserVar[para;$sum[$getGlobalUserVar[para;$authorID];$getGlobalUserVar[banka;$authorID]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**Başarıyla \`$numberSeparator[$getGlobalUserVar[banka;$authorID];,]\` Miktarında Para Cüzdana Çekildi**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$suppressErrors

`,

}); 

bot.command({
  name: "yatır-hepsi",
  code: `
$setGlobalUserVar[para;$sub[$getGlobalUserVar[para;$authorID];$getGlobalUserVar[para;$authorID]];$authorID]
$setGlobalUserVar[banka;$sum[$getGlobalUserVar[banka;$authorID];$getGlobalUserVar[para;$authorID]];$authorID]
$color[1;RANDOM]
$author[1;$userTag[$authorID];$userAvatar[$authorID]]
$description[1;
**Başarıyla \`$numberSeparator[$getGlobalUserVar[para;$authorID];,]\` Miktarında Para Bankaya Yatırıldı**]
$footer[1;$userTag[$authorID];$userAvatar[$authorID]]
$suppressErrors

`,

});  

