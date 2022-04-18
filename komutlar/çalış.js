module.exports = {
  name: "çalış",
  code: `
$color[1;RANDOM]
$description[1;
💸・Çalıştın Ve $random[500;3000] Para Kazandın
]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[500;3000]];$authorID]
$footer[1;Bu Komutu,$username Tarafından Kullanıldı]
$thumbnail[1;$authorAvatar]
$cooldown[10m;Hey Dostum Biraz Dinlenmelisin]    

`
};
