module.exports = {
name:"devpara",
code:`


$color[RANDOM]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];1000000];$authorID]

$title[$username#$discriminator[$authorID]]

$description[

Geliştiricim olduğun için 1.000.000 miktar para hesabına eklendi.]

$onlyForIDs[$botOwnerID; Bu komutu sadece bot geliştiricisi kullanabilir.] 



`
  }