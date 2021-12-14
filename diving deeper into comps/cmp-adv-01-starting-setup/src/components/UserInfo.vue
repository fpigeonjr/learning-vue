<template>
  <section>
    <BaseCard>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </BaseCard>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
}
</script>

<style scoped></style>
