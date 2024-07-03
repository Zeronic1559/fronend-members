<template>
  <nuxt-link :to="route ? route.path : '/'" class="button p-3 w-full mb-4 rounded-md flex items-center gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="white" fill-rule="evenodd" d="M15 10a.75.75 0 0 1-.75.75H7.612l2.158 1.96a.75.75 0 1 1-1.04 1.08l-3.5-3.25a.75.75 0 0 1 0-1.08l3.5-3.25a.75.75 0 1 1 1.04 1.08L7.612 9.25h6.638A.75.75 0 0 1 15 10" clip-rule="evenodd"/></svg>
    <span class="text-white">{{ route ? route.title : "กลับไปหน้าแรก" }}</span>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  route: {
    type: Object,
  },
});
</script>

<style scoped>
.button {
  background: linear-gradient(90deg, #d1191985 0%, #800c0c98 88.02%);
}
</style>
