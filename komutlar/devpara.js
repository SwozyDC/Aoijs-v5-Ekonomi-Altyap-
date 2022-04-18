module.exports = {
name:"devpara",
code:`
$color[1;RANDOM]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];1000000];$authorID]
$author[1;$userTag;$userAvatar[$authorID]]
$color[1;RANDOM]
$description[1;
**Geliştiricim olduğun için 1.000.000 miktar para hesabına eklendi**]
$footer[1;Komut,$userTag Tarafından Kullanıldı]
$onlyForIDs[$botOwnerID;**Bu Komutu Tek $userTag[$botOwnerID] Kullanabilir**] 



`
  }