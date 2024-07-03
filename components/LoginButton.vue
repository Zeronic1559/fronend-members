<template>
  <button type="submit">
    <!-- <IconifyIcon :icon="icons.loginVariant" class="icon" /> -->
    {{ text }}
    <span v-if="isLoading" class="spinner"></span>
  </button>
</template>

<script setup>


const props = defineprops({
    text: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
  })
</script>

<style  scoped>
button {
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
}

.icon {
  margin-right: 10px;
}

.spinner {
  position: absolute;
  top: 38%;
  right: 20px;
  transform: translateY(-50%);
  height: 15px;
  width: 15px;
  margin-left: 10px;
  filter: alpha(opacity=100);
  animation: rotation 0.7s infinite linear;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 100%;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
