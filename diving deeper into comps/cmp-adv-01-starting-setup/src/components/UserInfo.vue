<template>
  <section>
    <BaseCard>
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
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
