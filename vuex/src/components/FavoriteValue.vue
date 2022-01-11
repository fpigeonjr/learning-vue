<template>
  <h3>{{ counter }}</h3>
  <p>we do more stuff</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
