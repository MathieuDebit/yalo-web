import Store from '../../stores/store'

export default {
  data () {
    return {
      state: Store
    }
  },
  computed: {
    usersCount () {
      return this.state.users.length
    },
    participantDisplay () {
      return this.usersCount > 1 ? 'participants' : 'participant'
    }
  }
}
