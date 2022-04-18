module.exports = {
name:"haftalık",
code:`
$color[1;RANDOM]
$description[1;
💸・Haftalık Paran $random[300;6000]  
]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[300;6000]];$authorID]
$footer[1;Bu Komutu,$username Tarafından Kullanıldı $addTimestamp]
$thumbnail[1;$authorAvatar]
$cooldown[7d;Hey Dostum Biraz Dinlenmelisin]    
`
} 

