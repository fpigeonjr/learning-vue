const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
  },
})

app.mount('#events')
