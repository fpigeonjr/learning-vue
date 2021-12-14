<template>
  <section>
    <BaseCard>
      <header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>
      <p>{{ infoText }}</p>
    </BaseCard>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
}
</script>

<style scoped></style>
