import React from 'react'

// mock fetch
const mockAPI = {
  '/mock/request1.do': {
    name: 'remoted component1'
  },
  '/mock/request2.do': {
    name: 'remoted component2'
  }
}
const fetch = function(url) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockAPI[url])
    }, 2000)
  })
}

export default function(mapping = {}) {
  return function(COM) {
    class Connect extends React.Component {
      constructor(props) {
        super(props)
        this.state = props.store || {}
        this.creators = {}
        for (let event in mapping) {
          this.creators[mapping[event]] = () => this.dispatch(event)
        }
      }

      dispatch = event => {
        const { requests = [] } = this.props
        const actions = requests.filter(req => req.event === event).map(req => {
          console.log(`event: ${event}, action: ${req.action}`)
          fetch(req.action).then(remotedProps => {
            this.setState(remotedProps)
          })
        })
      }

      render() {
        const mergedProps = { ...this.state, ...this.creators }
        return <COM {...mergedProps} />
      }
    }
    return Connect
  }
}
