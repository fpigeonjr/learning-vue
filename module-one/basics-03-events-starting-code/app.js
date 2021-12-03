const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0
        }, 2000)
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullName = ''
    //   } else {
    //     this.fullName = value + ' ' + this.lastName
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = ''
    //   } else {
    //     this.fullName = this.name + ' ' + value
    //   }
    // },
  },
  computed: {
    fullName() {
      console.log('running again')
      if (this.name === '' || this.lastName === '') {
        return ''
      }
      return this.name + ' ' + this.lastName
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
    },
    reset() {
      this.counter = 0
    },
    setName() {
      this.name = event.target.value
    },
    submitForm() {
      alert('Submitted')
    },
    confirmInput() {
      this.confirmedName = this.name
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    },
  },
})

app.mount('#events')
