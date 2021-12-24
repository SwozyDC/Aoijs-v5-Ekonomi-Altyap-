module.exports = {
  name: "çalış",

  code: `

$color[RANDOM]

$description[

💸・Çalıştın Ve $random[500;3000] Para Kazandın

]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[500;3000]];$authorID]

$footer[Bu Komutu,$username Tarafından Kullanıldı]

$thumbnail[$authorAvatar]

$cooldown[10m;Hey Dostum Biraz Dinlenmelisin]    

`
};
