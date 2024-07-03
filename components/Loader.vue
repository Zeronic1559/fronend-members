<template>
  <typography
    variant="span"
    :class="[
      'text-center',
      { 'text-black': isBlack },
      { 'text-white': !isBlack },
    ]"
  >
    กำลังโหลด...
  </typography>
</template>

<script>
import Typography from '@/components/Typography'

  const props = defineProps({
    isBlack: {
      type: Boolean,
      default: false,
    },
  });

</script>

<style scoped></style>
