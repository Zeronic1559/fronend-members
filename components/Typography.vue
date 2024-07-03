<template>
    <div>
    <h1 v-if="variant === 'h1'"class="cn(
        'text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )">
      <slot></slot>
    </h1>
    <h2 v-if="variant === 'h2'" class="cn(
        'text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )">
      <slot></slot>
    </h2>
    <p v-if="variant === 'paragraph'" class="cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )">
      <slot></slot>
    </p>
    <span v-if="variant === 'span'" class="cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        props.class,
      )">
      <slot></slot>
    </span>
    </div>
</template>

<script setup>
const props = defineProps({
    variant: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>

</style>