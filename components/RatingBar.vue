<template>
  <div class="mt-4">
    <div class="text-white text-sm">อัตราการชนะ {{ winRate }} %</div>
    <div class="border border-white rounded-full w-full h-[10px]">
      <div
        class="bg-win-rate h-full rounded-full"
        :style="{ width: `${winRate}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    winRate: {type: [String, Number],default: 0,},
  });
</script>

<style scoped>
.bg-win-rate {
  background-color: #bf1313;
}
</style>
