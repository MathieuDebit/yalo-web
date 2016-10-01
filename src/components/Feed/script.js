import Store from '../../stores/store'
import Message from '../Message'

export default {
  components: {
    Message
  },
  data () {
    return {
      messages: Store.messages
    }
  }
}
