<template>
  <button
    :class="[
      disabled ? 'button --is-disabled' : 'button',
      { '--is-active': isActive },
    ]"
    @click="onClick"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script setup>
   const props = defineProps({
    text: {
      type: String | Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped>
.button {
  padding: 10px 15px;
  color: #bf1313;
  font-size: 17px;
  border: 1px solid #bf1313;
  border-radius: 5px;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.button:hover {
  color: white;
  background-color: #bf1313;
}

.button.--is-active {
  color: white;
  background-color: #bf1313;
}

.button.--is-disabled {
  color: #999999;
  border: 1px solid #d9d9d9;
  cursor: default;
}
</style>
