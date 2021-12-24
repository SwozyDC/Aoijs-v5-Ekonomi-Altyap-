module.exports = {

name: "günlük",

code: `

$color[RANDOM]

$description[

💸・Günlük Paran $random[200;4000]  

]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[200;4000]];$authorID]

$footer[Bu Komutu,$username Tarafından Kullanıldı $addTimestamp]

$thumbnail[$authorAvatar]

$globalCooldown[1d;Hey Dostum Biraz Dinlenmelisin]   

`

} 

