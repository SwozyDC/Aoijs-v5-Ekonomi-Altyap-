module.exports = {
name:"şans-oyunu",
code:`


<@$authorID>, şanslı sayın  __$random[1;100]__ olduğu için __$random[1;100]__ miktar para kazandın.

$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[1;100]];$authorID] 


`
  }