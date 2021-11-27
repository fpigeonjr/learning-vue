const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish Vue course',
      vueLink: 'https://vuejs.org/',
    }
  },
})
app.mount('#user-goal')
