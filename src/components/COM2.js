import React, { Component } from 'react'
import requestable from '../requestable'

class COM2 extends Component {
  handleClick = () => {
    const { onTouch = () => {} } = this.props
    onTouch()
  }

  render() {
    console.log('COM2 render')
    const { name } = this.props
    return (
      <div>
        <label>{name}</label>
        <button onClick={this.handleClick}>touch</button>
      </div>
    )
  }
}
export default requestable({
  touch: 'onTouch'
})(COM2)
