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
        console.log(this.message)

        this.message = ''
      }
    }
  }
}
