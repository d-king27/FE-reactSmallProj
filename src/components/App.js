import React from 'react';
import FormBar from './FormBar'
import DisplayBox from './DisplayBox'
var emoji = require('./emoji.json')
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis: emoji,
      display: {title:'', symbol: '@'},
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.findEmojiData = this.findEmojiData.bind(this);
  }

  findEmojiData(word) {
    var Regex = new RegExp(word, 'i')
    var newDisplay = {}
    this.state.emojis.forEach(function (item, index) {
      if (Regex.test(item.keywords) === true) {
        newDisplay.title = item.title
        newDisplay.symbol = item.symbol
      }
    })
      this.setState({
      display: {title:newDisplay.title,symbol:newDisplay.symbol}
    })
    console.log(this.state.display)
}

handleChange (event) {
  const newValue = event.target.value;
  this.setState({
    value: newValue
  })
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
         <DisplayBox
         title = {this.state.display.title}
         symbol = {this.state.display.symbol}/>
      </div>
    );
  }
}

export default App;

