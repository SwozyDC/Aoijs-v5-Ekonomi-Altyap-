module.exports = {

  name: "cf",

  aliases: "cf",

  code: `

$if[$replaceText[$replaceText[$randomText[1;2];1;1;100];2;2;100]==1]

:darkcoincf: Para Dönüyor...

$editIn[3s;🪙 Kazandın! $message[1] Adet Para Hesabına Yatırılıyor.]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$message[1]];$authorID]

$else

:darkcoincf: Para Dönüyor...

$editIn[3s;:dcoin:  Kaybettin! $message[1] Adet Para Hesabından Çekiliyor.]

$setGlobalUserVar[param;$sub[$getGlobalUserVar[param;$authorID];$message[1]];$authorID]

$endif

$onlyIf[$isNumber[$message[1]]!=false;:emoji_71: | Bir Sayı Gir!]

$argsCheck[>1;:emoji_71: | Bir Sayı Gir!]

$onlyIf[$message[1]<=$getGlobalUserVar[param;$authorID];:emoji_71: | Cüzdanında Bu Kadar Para Yok!]

$onlyIf[$noMentionMessage>=0;:emoji_71: | Sayıyı düzgün yaz.]

$cooldown[30s;:emoji_71: | Hey Dostum Biraz Yavaş %time% Dinlenmeye İhtiyacın] 

$onlyIf[$message[1]<50001;:emoji_71: | 50.000'den Fazla Giremezsin]

`

}; 

komutlar/cf.js