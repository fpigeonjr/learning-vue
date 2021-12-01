const app = Vue.createApp({
  data() {
    return {
      input: '',
      inputTwo: '',
    }
  },
  methods: {
    showAlert() {
      alert('This is an alert!')
    },
    setInput(event) {
      this.input = event.target.value
    },
    setInputTwo(event) {
      this.inputTwo = event.target.value
    },
  },
})

app.mount('#assignment')
