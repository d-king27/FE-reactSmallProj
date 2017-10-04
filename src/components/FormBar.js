import React from 'react';

class FormBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSubmit(event){
        event.preventDefault();
         this.props.findEmojiData(this.props.value)
      }


  render () {
    return (

        <div>
        <form>
          <textarea onChange={this.props.handleChange} value={this.props.value}></textarea>
        </form>
      </div>
    );
  }
}

export default FormBar;