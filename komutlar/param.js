module.exports = {
name:"param",
code:`
$color[1;RANDOM]
$description[1;
💰 | Şuanki Paran 
\`$getGlobalUserVar[param;$authorID]\`
💰 | Bankadaki Paran
\`$getGlobalUserVar[banka;$authorID]\`
]
$footer[1;Komut,$userTag[$authorID] Tarafından Kullanıldı $addTimestamp]
$thumbnail[1;$authorAvatar]

`

} 

