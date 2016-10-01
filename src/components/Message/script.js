import Store from '../../stores/store'

export default {
  props: ['message'],
  data () {
    return {
      state: Store
    }
  },
  computed: {
    myMessage () {
      return this.message.user.name === this.state.user.name ? 'yalo-feed-message-me' : ''
    },
    getMessageDate () {
      const currentTime = new Date()
      const time = new Date(this.message.time)
      const hourDisplay = time.getHours() + ':' + time.getMinutes()

      if (time.getUTCDate() === currentTime.getUTCDate()) {
        return hourDisplay
      } else {
        return time.toDateString() + ' - ' + hourDisplay
      }
    }
  }
}
