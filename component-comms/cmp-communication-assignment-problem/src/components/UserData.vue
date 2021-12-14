<template>
  <section>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="enteredName" name="name" id="name" />
      </div>
      <div>
        <label for="age">Age</label>
        <input type="number" v-model="enteredAge" name="age" id="age" />
      </div>
      <div>
        <button>Update User</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['update-user'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('update-user', this.enteredName, this.enteredAge)
      this.clearInput()
    },
    clearInput() {
      this.enteredName = ''
      this.enteredAge = ''
    },
  },
}
</script>
