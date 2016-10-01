import Store from '../../stores/store'

export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onFormSubmit (e) {
      e.preventDefault()

      if (this.message !== '') {
        Store.messages.push({
          user: { name: Store.user.name },
          text: this.message,
          time: new Date()
        })

        this.message = ''
      }
    }
  }
}
