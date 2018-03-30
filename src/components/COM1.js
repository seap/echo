import React, { Component } from 'react'
import requestable from '../requestable'

class COM1 extends Component {
  handleClick = () => {
    const { onClick = () => {} } = this.props
    onClick()
  }

  handleTouch = () => {
    const { onTouch = () => {} } = this.props
    onTouch()
  }

  render() {
    console.log('COM1 render')
    const { name } = this.props
    return (
      <div>
        <label>{name}</label>
        <button onClick={this.handleClick}>click</button>
        <button onClick={this.handleTouch}>touch</button>
      </div>
    )
  }
}
export default requestable({
  click: 'onClick',
  touch: 'onTouch'
})(COM1)
