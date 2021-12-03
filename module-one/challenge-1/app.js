const app = Vue.createApp({
  data() {
    return {
      me: {
        name: 'Frank Pigeon',
        age: 42,
      },
      imgLink:
        'https://images.unsplash.com/photo-1551415923-a2297c7fda79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      max: 1,
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max)
    },
    calculateAge() {
      return this.me.age + 5
    },
  },
})
app.mount('#assignment')
