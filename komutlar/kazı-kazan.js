module.exports = {
  name: "kazı-kazan",
  code: `
$color[1;RANDOM]
$title[1;Kazı Kazan]
$description[1;Kazı Kazan oynayarak $randomText[100;200;300;400;500] 💵 kazandın.]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$randomText[100;200;300;400;500]];$authorID] 
`
};
