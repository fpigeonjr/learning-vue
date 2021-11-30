const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    add() {
      this.counter++
    },
    reduce() {
      this.counter--
    },
    reset() {
      this.counter = 0
    },
  },
})

app.mount('#events')
