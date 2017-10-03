var emoji = require('./emoji.json')
console.log(emoji[0])

function findWord(word){
    var Regex = new RegExp(word, 'i')
    var final = []
    emojis.forEach(function(item, index){
      if(Regex.test(item.keywords)=== true){
        final.push({title : item.title,symbol:item.symbol})
      }
    })
    return final
  }