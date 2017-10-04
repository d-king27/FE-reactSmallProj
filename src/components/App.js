import React from 'react';
import FormBar from './FormBar'
import DisplayBox from './DisplayBox'
var emoji = require('./emoji.json')
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.findEmojiData = this.findEmojiData.bind(this);
  }

  findEmojiData(word) {
    if(word === ''){return []}
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
  

handleChange (event) {
  const newValue = event.target.value;
  this.setState({
    value: newValue
  })
}

renderEmojis(arr){
  return (arr.map(function(item){
    return <DisplayBox 
    title = {item.title}
    symbol = {item.symbol}
    />
  })
  )
}

 
  render() {
    return (
      <div>
        <h1>Emoji Search App</h1>
        <FormBar 
        value= {this.state.value}
        handleChange = {this.handleChange}
        findEmojiData = {this.findEmojiData}
         />
         {this.renderEmojis(this.findEmojiData(this.state.value))}
         </div>
    );
  }
}

export default App;

