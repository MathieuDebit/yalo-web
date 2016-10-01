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
      const hourDisplay = time.getHours() + ':' + ('0' + time.getMinutes()).substr(-2)

      if (time.getUTCDate() === currentTime.getUTCDate()) {
        return hourDisplay
      } else {
        return time.toDateString() + ' - ' + hourDisplay
      }
    },
    getUserAvatar () {
      let userAvatar = 'http://ddi2019-chat.herokuapp.com/default.jpg'

      const user = this.state.users.filter((user) =>
        user.name === this.message.user.name
      )[0]

      if (user && user.avatar) {
        userAvatar = user.avatar
      }

      return userAvatar
    }
  }
}
