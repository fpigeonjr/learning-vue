<template>
  <h1>Hi from App</h1>
  <user-data @update-user="updateUser"></user-data>
  <active-user :name="name" :age="age"></active-user>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: 0,
    }
  },
  methods: {
    updateUser(enteredName, enteredAge) {
      this.name = enteredName
      this.age = enteredAge
    },
  },
}
</script>
