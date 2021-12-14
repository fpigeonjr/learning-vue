<template>
  <div>
    <TheHeader />
    <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import UserInfo from './components/UserInfo.vue'

export default {
  components: {
    TheHeader,
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: 'Frank Pigeon',
        description: 'Site owner and admin',
        role: 'admin',
      },
    }
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
