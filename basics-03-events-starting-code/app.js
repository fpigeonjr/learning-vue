const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    }
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
  },
})

app.mount('#events')
