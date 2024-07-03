<template>
  <wrapper class="logout__content">
    <typography variant="h1" class="text-center text-white">
      กำลังออกจากระบบ...
    </typography>
  </wrapper>
</template>

<script setup>
import Profile from '@/components/Profile'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'
import Wrapper from '@/components/Wrapper'
import Typography from '@/components/Typography'

definePageMeta({
  layout: "auth",
}),
onMounted(() => {
  setTimeout(() =>  {
      this.$auth.logout()
    }, 1000)
  })
</script>

<style scoped>
.logout__content {
  background-color: #700909;
}
</style>
