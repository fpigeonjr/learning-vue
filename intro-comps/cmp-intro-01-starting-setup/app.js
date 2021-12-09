const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '210-123-1234',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '210-123-1322',
          email: 'julie@localhost.com',
        },
      ],
    }
  },
})

app.component('friend-contact', {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails">
      {{isHidden ? 'Hide' : 'Show'}} Details
    </button>
    <ul v-show="isHidden">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      isHidden: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '210-123-1234',
        email: 'manuel@localhost.com',
      },
    }
  },
  methods: {
    toggleDetails() {
      this.isHidden = !this.isHidden
    },
  },
})

app.mount('#app')
