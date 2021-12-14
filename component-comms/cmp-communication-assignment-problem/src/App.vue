<template>
  <user-data @update-user="updateUser"></user-data>
  <active-user :name="user.name" :age="user.age"></active-user>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        age: 0,
      },
    }
  },
  methods: {
    updateUser(enteredName, enteredAge) {
      this.user = {
        name: enteredName,
        age: enteredAge,
      }
    },
  },
}
</script>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
