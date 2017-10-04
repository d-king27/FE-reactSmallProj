var emoji = require('./src/components/emoji.json')


function findWord(word){
  var Regex = new RegExp(word, 'i')
 var firstChoice = emoji.filter(function(item){
   return Regex.test(item.title)
  })
 if(firstChoice.length > 0){return firstChoice}
 else{
   return emoji.filter(function(item){
     return Regex.test(item.keywords)
   })
 }
}

console.log(findWord('sa'))