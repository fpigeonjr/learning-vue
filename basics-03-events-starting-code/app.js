const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
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
  },
})

app.mount('#events')
