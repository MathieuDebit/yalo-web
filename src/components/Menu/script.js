import Store from '../../stores/store'
import MenuUser from '../MenuUser'

export default {
  components: {
    MenuUser
  },
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
