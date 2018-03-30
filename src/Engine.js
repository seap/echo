import React from 'react'
import ReactDOM from 'react-dom'

class Root extends React.Component {
  render() {
    const { components, layout, library } = this.props
    const result = layout.map((ele, i) => {
      const { type, props = {}, requests = [] } = components[ele]
      const COM = library[type]
      return <COM key={i} requests={requests} store={props} />
    })
    return <div>{result}</div>
  }
}

export default class Engine {
  constructor(library) {
    this.library = library
  }

  render(props, node) {
    ReactDOM.render(<Root {...props} library={this.library} />, node)
  }
}
