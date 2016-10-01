import Store from '../../stores/store'

export default {
  props: ['user'],
  data () {
    return {
      state: Store
    }
  },
  computed: {
    getUserAvatar () {
      let userAvatar = 'http://ddi2019-chat.herokuapp.com/default.jpg'

      return this.user.avatar || userAvatar
    }
  }
}
