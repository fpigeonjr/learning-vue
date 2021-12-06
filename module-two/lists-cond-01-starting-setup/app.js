const app = Vue.createApp({
  data() {
    return { goals: [], enteredGoal: '' }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal)
    },
  },
})

app.mount('#user-goals')
