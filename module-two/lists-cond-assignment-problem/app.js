const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      isHidden: false,
    }
  },
  computed: {
    btnCaption() {
      return this.isHidden ? 'Show List' : 'Hide List'
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.task)
    },
    toggleHide() {
      this.isHidden = !this.isHidden
    },
  },
})
app.mount('#assignment')
