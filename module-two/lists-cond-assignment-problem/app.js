const app = Vue.createApp({
  data() {
    return {
      task: '',
      tasks: [],
      isHidden: false,
    }
  },
  computed: {
    hiddenBtnText() {
      if (this.isHidden) {
        return 'Show List'
      } else {
        return 'Hide List'
      }
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
