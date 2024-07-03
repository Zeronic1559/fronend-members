<template>
  <div>
    <typography variant="h1" class="text-center mb-8"> {{title}} </typography>
    <div class="text-center text-red-600 text-lg">กรุณาอัพเดทข้อมูลของคุณเพิ่มเติมเพื่อเข้าใช้งาน</div>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">อัพเดทข้อมูล</Button>
  </div>
</template>

<script setup>
import Typography from '@/components/Typography'

const title = ref("อัพเดทข้อมูล");

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
  })
</script>

<style scoped></style>
