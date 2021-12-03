const app = Vue.createApp({
  data() {
    return {
      count: 0,
    }
  },
  watch: {
    count() {
      setTimeout(() => {
        this.count = 0
      }, 5000)
    },
  },
  computed: {
    result() {
      if (this.count === 0) return
      if (this.count < 37) {
        return 'Almost There...'
      } else if (this.count > 37) {
        return 'Busted'
      } else {
        return '🎉Made it'
      }
    },
  },
  methods: {
    add(num) {
      this.count = this.count + num
    },
  },
})

app.mount('#assignment')
