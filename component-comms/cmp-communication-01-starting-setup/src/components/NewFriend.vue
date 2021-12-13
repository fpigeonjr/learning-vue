<template>
  <form @submit.prevent="handleForm">
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="name">Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  methods: {
    handleForm() {
      this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      )
    },
  },
}
</script>
