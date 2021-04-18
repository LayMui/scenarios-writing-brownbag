import scenarios01 from './scenarios01'
import scenarios02 from './scenarios02'
import scenarios03 from './scenarios03'
import scenarios04 from './scenarios04'
import scenarios05 from './scenarios05'
import scenarios06 from './scenarios06'
import scenarios07 from './scenarios07'

const pages = [
  {
    name: 'scenarios01',
    meta: {
      title: 'Introduction'
    },
    component: scenarios01
  },
  {
    name: 'scenarios02',
    meta: {
      title: 'Convergent Thinking and Divergent Thinking'
    },
    component: scenarios02
  },
  {
    name: 'scenarios03',
    meta: {
      title: 'Scenarios Feature File'
    },
    component: scenarios03
  },
  {
    name: 'scenarios04',
    meta: {
      title: 'Different Level of Details'
    },
    component: scenarios04
  },
  {
    name: 'scenarios05',
    meta: {
      title: 'Tips and Tricks'
    },
    component: scenarios05
  },
  {
    name: 'scenarios06',
    meta: {
      title: 'Use of Tags'
    },
    component: scenarios06
  },
  {
    name: 'scenarios07',
    meta: {
      title: '3 main reasons for tagging'
    },
    component: scenarios07
  },
  
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages