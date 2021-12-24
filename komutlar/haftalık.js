module.exports = {

name:"haftalık",

code:`

$color[RANDOM]

$description[

💸・Haftalık Paran $random[300;6000]  

]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[300;6000]];$authorID]

$footer[Bu Komutu,$username Tarafından Kullanıldı $addTimestamp]

$thumbnail[$authorAvatar]

$cooldown[7d;Hey Dostum Biraz Dinlenmelisin]    

`

} 

