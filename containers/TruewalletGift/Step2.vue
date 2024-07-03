<template>
  <div>
    <div class="text-center mt-12">
      <Label for="done" class="text-base md:text-lg">ฝากเงินเรียบร้อยแล้ว</Label>
    </div>
    <div>
    <Button class="mt-4 w-full text-xl" variant="gradient" size="xl">กลับไปหน้าเล่นเกม</Button>
    </div>
  </div>
</template>

<script setup>
import LinkGradientButton from "@/components/LinkGradientButton";

definePageMeta({
  layout: "auth",
});

const router = useRouter()
const route = useRoute()

</script>

<style scoped></style>
