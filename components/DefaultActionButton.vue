<template>
  <div
    :class="[
      'bg-gradient-to-r from-primary to-secondary text-white text-center text-default rounded-sm size-full py-2.5 px-5',
      { '--is-disabled': isDisabled },
      { '--is-small': isSmall },
    ]"
  >
    {{ text }}
    <span v-if="isLoading && !isDisabled" class="spinner"></span>
  </div>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
  })
</script>

<style scoped>
.button {
  width: 100%;
  padding: 10px 15px;
  color: #ffffff;
  font-size: 17px;
  background: linear-gradient(
    90deg,
    #bf1313 0%,
    #700909 100%
  );
  border-radius: 5px;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.button.--is-disabled {
  color: #999999;
  background: #d9d9d9;
  cursor: default;
}

.button.--is-small {
  font-size: 14px;
}

.button:hover {
  background: linear-gradient(90deg, #bf1313ee 0%rgba(112, 9, 9, 0.96)09 100%);
}

.button:hover.--is-disabled {
  background: #d9d9d9;
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
