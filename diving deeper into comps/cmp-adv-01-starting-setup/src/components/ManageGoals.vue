<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <ErrorAlert v-if="inputIsInvalid">
      <h2>Input is invalid</h2>
      <p>Please fix your input</p>
      <button @click="confirmError">Ok</button>
    </ErrorAlert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    }
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value
      if (enteredGoal === '') {
        this.inputIsInvalid = true
      }
    },
    confirmError() {
      this.inputIsInvalid = false
    },
  },
}
</script>
