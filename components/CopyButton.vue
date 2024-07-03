<template>
    <div class="bg-gradient-to-br from-primary to-secondary text-white text-center text-xl rounded-sm size-full py-2.5 px-5" @click="$emit('click')">
    {{ text }}
  </div>
</template>

<script setup>
 const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
.button {
  width: 100%;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 20px;
  background: linear-gradient(90deg, #bf1313 0%, #700909 100%);
  border-radius: 5px;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.icon {
  margin-right: 10px;
}
</style>