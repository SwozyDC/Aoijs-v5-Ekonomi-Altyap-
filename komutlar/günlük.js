module.exports = {
name: "günlük",
code: `
$color[1;RANDOM]
$description[1;
💸・Günlük Paran $random[200;4000]  
]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[200;4000]];$authorID]
$footer[1;Bu Komutu,$username Tarafından Kullanıldı $addTimestamp]
$thumbnail[1;$authorAvatar]
$globalCooldown[1d;Hey Dostum Biraz Dinlenmelisin]   

`

} 

