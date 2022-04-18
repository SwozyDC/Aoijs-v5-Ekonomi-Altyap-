module.exports = {
name:"para-gönder",
code:`
$onlyIf[$noMentionMessage>0;😁  | 0'dan Düşük Miktar Belirtemezsin Belirtince Botu Hacklemiş Olmuyorsun]
$onlyIf[$mentioned[1]!=$authorID;😁 | Kendine Para Atamazsın]
$onlyIf[$noMentionMessage<=$getVar[param;$authorID];😁 | Bu Kadar Paran Yok Böyle Yaparak Hacklemişmi Sanıyorsun]
$onlyIf[$isNumber[$noMentionMessage]!=false;😁 | Göndereceğin Miktarı Gir]
$setGlobalUserVar[param;$sub[$getGlobalUserVarVar[param;$authorID];$noMentionMessage];$authorID]
$description[1;$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$username[😁| $mentioned[1]]#$discriminator[$mentioned[1]] Kişisine Para Yollandı]
$color[1;RANDOM]

 




`
  }