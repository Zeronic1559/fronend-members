<template>
  <nuxt-link :to="to">
    <slot></slot>
  </nuxt-link>
</template>

<script setup>
  const props = defineprops({
    to: {
      type: String,
      required: true,
    },
  })
</script>

<style  scoped>
a {
  @apply p-2 rounded-md;
  text-align: center;
  font-size: 20px;
  color: #700909;
  display: block;
  border: 1px solid #bf1313;
  width: 100%;
}
</style>
