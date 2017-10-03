import React from 'react';


class DisplayBox extends React.Component {
  render () {
    return (
<div> 
<ul>
  <li>Title:{this.props.title}</li>
  <li>Symbol:{this.props.symbol}</li>
</ul>
 </div>
    );
  }
}

export default DisplayBox;