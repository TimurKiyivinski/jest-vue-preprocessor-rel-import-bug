import { greeter } from './lib/something'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: greeter()
    }
  }
}
