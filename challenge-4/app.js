const app = Vue.createApp({
  data() {
    return {
      className: '',
      isHidden: false,
      bgColor: '',
    }
  },
  methods: {
    toggleHide() {
      this.isHidden = !this.isHidden
    },
  },
})

app.mount('#assignment')
