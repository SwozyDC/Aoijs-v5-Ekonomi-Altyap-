module.exports = {
  name: "kazı-kazan",
  code: `
  
$color[RANDOM]

$title[Kazı Kazan]

$description[Kazı Kazan oynayarak $randomText[100;200;300;400;500] 💵 kazandın.]

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$randomText[100;200;300;400;500]];$authorID] 
`
};
