const app = Vue.createApp({
  data() {
    return {
      className: '',
      isHidden: false,
      bgColor: '',
    }
  },
  computed: {
    paraClasses() {
      return {
        user1: this.className === 'user1',
        user2: this.className === 'user2',
        visible: !this.isHidden,
        hidden: this.isHidden,
      }
    },
  },
  methods: {
    toggleHide() {
      this.isHidden = !this.isHidden
    },
  },
})

app.mount('#assignment')
