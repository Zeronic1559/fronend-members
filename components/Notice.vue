<template>
  <div :class="['notice p-4', { '--is-success': isSuccess }]">
    <typography variant="span">
      <slot></slot>
    </typography>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

  const props = defineProps({
  isSuccess: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.notice {
  background: #fdedff;
  border: 1px solid #fbe3ff;
  box-sizing: border-box;
  border-radius: 10px;
}

.notice.--is-success {
  background: #daefdb;
  border-color: #92b494;
}
</style>
