import Engine from './Engine'
import COM1 from './components/COM1'
import COM2 from './components/COM2'

const engine = new Engine({
  COM1,
  COM2
})

const json = {
  components: {
    com1: {
      type: 'COM1',
      props: {
        name: 'COMPONENT1'
      },
      requests: [
        {
          event: 'click',
          action: '/mock/request1.do'
        },
        {
          event: 'touch',
          action: '/mock/request2.do'
        }
      ]
    },
    com2: {
      type: 'COM2',
      props: {
        name: 'COMPONENT2'
      },
      requests: [
        {
          event: 'touch',
          action: '/mock/request2.do'
        }
      ]
    }
  },
  layout: ['com1', 'com2']
}

engine.render(json, document.getElementById('root'))
