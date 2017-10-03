var emoji = require('./src/components/emoji.json')


function findWord(word){
  var Regex = new RegExp(word, 'i')
 var firstChoice = emoji.filter(function(item){
   return item.title === word
  })
 var secondChoice = emoji.filter(function(item){
   return Regex.test(item.keywords)
 }) 
 return firstChoice.concat(secondChoice)
}

console.log(findWord('Grin'))